import React, { useState, useEffect } from 'react';
import Header from './PhotoExhibition/Header';
import ArchiveGrid from './PhotoExhibition/ArchiveGrid';
import MonographView from './PhotoExhibition/MonographView';
import UploadPanel from './PhotoExhibition/UploadPanel';
import ManagerPanel from './PhotoExhibition/ManagerPanel';
import DetailModal from './PhotoExhibition/DetailModal';
import { defaultPhotos } from './PhotoExhibition/defaultPhotos';

export function PhotoExhibitionModal({ onClose }) {
  const [photos, setPhotos] = useState([]);
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [viewMode, setViewMode] = useState('archive'); // 'archive' or 'exhibition'
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('전체');
  const [customCategories, setCustomCategories] = useState([]);
  const [isAdminMode, setIsAdminMode] = useState(() => {
    return sessionStorage.getItem('photo_exhibition_admin') === 'true';
  });

  // Lock scrolling of document.body on mount
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Initialize data from LocalStorage or Default Mock Data
  useEffect(() => {
    const savedPhotos = localStorage.getItem('photo_exhibition_photos');
    let loadedPhotos = defaultPhotos;
    if (savedPhotos) {
      loadedPhotos = JSON.parse(savedPhotos);
      // Hotfix: Update photo-1's URL if it's the old broken Unsplash link
      loadedPhotos = loadedPhotos.map(p => {
        if (p.id === 'photo-1' && p.url.includes('1472214222541-d510753a4707')) {
          return {
            ...p,
            url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200"
          };
        }
        return p;
      });
      setPhotos(loadedPhotos);
      localStorage.setItem('photo_exhibition_photos', JSON.stringify(loadedPhotos));
    } else {
      setPhotos(defaultPhotos);
      localStorage.setItem('photo_exhibition_photos', JSON.stringify(defaultPhotos));
    }

    const savedCats = localStorage.getItem('photo_exhibition_categories');
    if (savedCats) {
      setCustomCategories(JSON.parse(savedCats));
    } else {
      const derivedCats = [...new Set(loadedPhotos.map(p => p.series))].filter(Boolean);
      setCustomCategories(derivedCats);
      localStorage.setItem('photo_exhibition_categories', JSON.stringify(derivedCats));
    }

    const savedLikes = localStorage.getItem('photo_exhibition_likes');
    if (savedLikes) {
      setLikedPhotos(JSON.parse(savedLikes));
    } else {
      setLikedPhotos([]);
    }
  }, []);

  // Handle Liking a Photo (Heart reaction)
  const handleLike = (photoId) => {
    let updatedLikes;
    let increment = 0;

    if (likedPhotos.includes(photoId)) {
      // Unlike
      updatedLikes = likedPhotos.filter(id => id !== photoId);
      increment = -1;
    } else {
      // Like
      updatedLikes = [...likedPhotos, photoId];
      increment = 1;
    }

    setLikedPhotos(updatedLikes);
    localStorage.setItem('photo_exhibition_likes', JSON.stringify(updatedLikes));

    // Update photo heart count in list
    const updatedPhotos = photos.map(photo => {
      if (photo.id === photoId) {
        return {
          ...photo,
          hearts: Math.max(0, photo.hearts + increment)
        };
      }
      return photo;
    });

    setPhotos(updatedPhotos);
    localStorage.setItem('photo_exhibition_photos', JSON.stringify(updatedPhotos));
  };

  // Handle Uploading a new Photo
  const handleUpload = (newPhoto) => {
    const updatedPhotos = [newPhoto, ...photos]; // Prepend new photo to the front
    setPhotos(updatedPhotos);
    localStorage.setItem('photo_exhibition_photos', JSON.stringify(updatedPhotos));

    if (newPhoto.series && !customCategories.includes(newPhoto.series)) {
      const updatedCats = [...customCategories, newPhoto.series];
      setCustomCategories(updatedCats);
      localStorage.setItem('photo_exhibition_categories', JSON.stringify(updatedCats));
    }
  };

  const handleDeletePhoto = (photoId) => {
    if (window.confirm("정말 이 사진을 삭제하시겠습니까?")) {
      const updatedPhotos = photos.filter(p => p.id !== photoId);
      setPhotos(updatedPhotos);
      localStorage.setItem('photo_exhibition_photos', JSON.stringify(updatedPhotos));
    }
  };

  const handleAddCategory = (newCatName) => {
    const trimmed = newCatName.trim();
    if (!trimmed) return;
    if (customCategories.includes(trimmed)) {
      alert("이미 존재하는 카테고리입니다.");
      return;
    }
    const updatedCats = [...customCategories, trimmed];
    setCustomCategories(updatedCats);
    localStorage.setItem('photo_exhibition_categories', JSON.stringify(updatedCats));
  };

  const handleRenameCategory = (oldName, newName) => {
    const trimmedNew = newName.trim();
    if (!trimmedNew || oldName === trimmedNew) return;

    // Update categories list
    const updatedCats = customCategories.map(c => c === oldName ? trimmedNew : c);
    setCustomCategories(updatedCats);
    localStorage.setItem('photo_exhibition_categories', JSON.stringify(updatedCats));

    // Update photos
    const updatedPhotos = photos.map(p => {
      if (p.series === oldName) {
        return { ...p, series: trimmedNew };
      }
      return p;
    });
    setPhotos(updatedPhotos);
    localStorage.setItem('photo_exhibition_photos', JSON.stringify(updatedPhotos));

    // Adjust activeCategory if renamed
    if (activeCategory === oldName) {
      setActiveCategory(trimmedNew);
    }
  };

  const handleDeleteCategory = (categoryName) => {
    if (window.confirm(`'${categoryName}' 카테고리를 삭제하시겠습니까? 소속된 사진들은 '미분류'로 이동합니다.`)) {
      // Update categories list
      const updatedCats = customCategories.filter(c => c !== categoryName);
      if (!updatedCats.includes('미분류') && photos.some(p => p.series === categoryName)) {
        updatedCats.push('미분류');
      }
      setCustomCategories(updatedCats);
      localStorage.setItem('photo_exhibition_categories', JSON.stringify(updatedCats));

      // Update photos
      const updatedPhotos = photos.map(p => {
        if (p.series === categoryName) {
          return { ...p, series: '미분류' };
        }
        return p;
      });
      setPhotos(updatedPhotos);
      localStorage.setItem('photo_exhibition_photos', JSON.stringify(updatedPhotos));

      // Reset activeCategory if deleted
      if (activeCategory === categoryName) {
        setActiveCategory('전체');
      }
    }
  };

  const handleSelectPhoto = (photoId) => {
    setSelectedPhotoId(photoId);
  };

  const handleBackToArchive = () => {
    setViewMode('archive');
    setSelectedPhotoId(null);
  };

  const handleVerifyAdmin = () => {
    if (isAdminMode) {
      if (window.confirm("관리자 모드를 로그아웃 하시겠습니까?")) {
        setIsAdminMode(false);
        sessionStorage.removeItem('photo_exhibition_admin');
      }
    } else {
      const pass = prompt("관리자 비밀번호를 입력하세요 (기본값: admin):");
      if (pass === "admin") {
        setIsAdminMode(true);
        sessionStorage.setItem('photo_exhibition_admin', 'true');
      } else if (pass !== null) {
        alert("비밀번호가 틀렸습니다.");
      }
    }
  };

  const filteredPhotos = activeCategory === '전체'
    ? photos
    : photos.filter(p => p.series === activeCategory);

  return (
    <div className="photo-exhibition-theme fixed inset-0 z-[100] overflow-y-auto w-full h-full bg-[#f6f5f0] text-[#1c1917] flex flex-col font-sans select-none select-text">
      {/* Site Header */}
      {viewMode === 'archive' && (
        <Header
          viewMode={viewMode}
          setViewMode={setViewMode}
          onOpenUpload={() => setIsUploadOpen(true)}
          onOpenManage={() => setIsManagerOpen(true)}
          isAdminMode={isAdminMode}
          onVerifyAdmin={handleVerifyAdmin}
          onClose={onClose}
        />
      )}

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {viewMode === 'archive' ? (
          <ArchiveGrid
            photos={photos}
            onSelectPhoto={handleSelectPhoto}
            likedPhotos={likedPhotos}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={['전체', ...customCategories]}
          />
        ) : (
          <MonographView
            photos={filteredPhotos}
            onLike={handleLike}
            likedPhotos={likedPhotos}
            selectedPhotoId={selectedPhotoId}
            onBackToArchive={handleBackToArchive}
          />
        )}
      </main>

      {/* Detail Modal (Archive Pop-up Detail View) */}
      {viewMode === 'archive' && selectedPhotoId && (
        <DetailModal
          photo={photos.find(p => p.id === selectedPhotoId)}
          likedPhotos={likedPhotos}
          onLike={handleLike}
          onClose={() => setSelectedPhotoId(null)}
        />
      )}

      {/* Upload Photo Modal */}
      <UploadPanel
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onUpload={handleUpload}
        existingSeries={['전체', ...customCategories]}
      />

      {/* Category & Content Manager Modal */}
      <ManagerPanel
        isOpen={isManagerOpen}
        onClose={() => setIsManagerOpen(false)}
        photos={photos}
        onDeletePhoto={handleDeletePhoto}
        onRenameCategory={handleRenameCategory}
        onDeleteCategory={handleDeleteCategory}
        categories={customCategories}
        onAddCategory={handleAddCategory}
      />

      {/* Footer */}
      {viewMode === 'archive' && (
        <footer style={{
          padding: '3rem 2rem',
          textAlign: 'center',
          borderTop: '1px solid rgba(0, 0, 0, 0.03)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-serif)',
          letterSpacing: '1px',
          backgroundColor: '#f6f5f0'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <span>© {new Date().getFullYear()} YJH Photography Archive. All Rights Reserved.</span>
            <span style={{ fontSize: '0.65rem', opacity: 0.7 }}>
              Built with React & Vanilla CSS • Single Heart Interaction
            </span>
          </div>
        </footer>
      )}

      {/* Scoped CSS styling blocks for fonts and variables */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&family=Noto+Serif+KR:wght@300;400;600&family=Noto+Sans+KR:wght@300;400;500&display=swap');

        .photo-exhibition-theme {
          /* Color Palette - Warm Ivory / Off-White Editorial */
          --bg-primary: #f6f5f0;      /* Warm Ivory */
          --bg-secondary: #ffffff;    /* Pure White */
          --bg-tertiary: #eae8e1;     /* Darker Ivory for borders/accent */
          --text-primary: #1c1917;    /* Deep Charcoal */
          --text-secondary: #57534e;  /* Muted Charcoal */
          --text-muted: #a8a29e;      /* Beige Grey */
          --accent: #e11d48;          /* Rose Red */
          --accent-glow: rgba(225, 29, 72, 0.08);
          
          /* Fonts */
          --font-serif: 'Cormorant Garamond', 'Noto Serif KR', serif;
          --font-sans: 'Inter', 'Noto Sans KR', sans-serif;

          /* Transitions */
          --transition-smooth: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
          --transition-fast: all 0.2s ease;
        }

        .photo-exhibition-theme * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        /* Hide scrollbar for Chrome, Safari and Opera globally */
        .photo-exhibition-theme *::-webkit-scrollbar {
          display: none;
        }

        .photo-exhibition-theme {
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-family: var(--font-sans);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .photo-exhibition-theme button {
          background: none;
          border: none;
          color: inherit;
          font: inherit;
          cursor: pointer;
          outline: none;
        }

        /* Glassmorphism Classes */
        .photo-exhibition-theme .glass-panel {
          background: rgba(250, 248, 245, 0.8) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          border: 1px solid rgba(0, 0, 0, 0.06) !important;
          box-shadow: 0 4px 30px rgba(0,0,0,0.01) !important;
        }

        .photo-exhibition-theme .glass-input {
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: var(--text-primary);
          border-radius: 4px;
          padding: 8px 12px;
          transition: var(--transition-fast);
        }
        .photo-exhibition-theme .glass-input:focus {
          outline: none;
          border-color: var(--accent);
          background: rgba(0, 0, 0, 0.04);
        }

        /* Keyframe Animations */
        @keyframes heartPulse {
          0% { transform: scale(1); }
          14% { transform: scale(1.3); }
          28% { transform: scale(1.15); }
          42% { transform: scale(1.4); }
          70% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }

        @keyframes doubleTapHeart {
          0% { transform: translate(-50%, -50%) scale(0) rotate(-15deg); opacity: 0; }
          15% { transform: translate(-50%, -50%) scale(1.2) rotate(5deg); opacity: 0.9; }
          30% { transform: translate(-50%, -50%) scale(1.0) rotate(0deg); opacity: 1; }
          80% { transform: translate(-50%, -50%) scale(1.0) rotate(0deg); opacity: 1; filter: drop-shadow(0 0 15px var(--accent)); }
          100% { transform: translate(-50%, -50%) scale(0.6) rotate(15deg); opacity: 0; }
        }

        @keyframes floatParticle {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-80px) scale(0.3); opacity: 0; }
        }

        @keyframes fadeIn {
          from { 
            opacity: 0; 
            filter: blur(8px);
            transform: scale(0.98) translateY(15px); 
          }
          to { 
            opacity: 1; 
            filter: blur(0);
            transform: scale(1) translateY(0); 
          }
        }

        .photo-exhibition-theme .pulse-animation {
          animation: heartPulse 0.8s ease-in-out;
        }

        .photo-exhibition-theme .fade-in {
          animation: fadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Heart Particle System */
        .photo-exhibition-theme .particle {
          position: absolute;
          pointer-events: none;
          color: var(--accent);
          animation: floatParticle 1s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }

        /* Layout Utilities */
        .photo-exhibition-theme .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        @media (max-width: 768px) {
          .photo-exhibition-theme .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}
