import './SearchMegaMenu.css'

export default function SearchMegaMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div className="search-mega-backdrop" onClick={onClose} />
      <div className="search-mega-menu">
        <div className="search-mega-header">
          <input 
            type="text" 
            placeholder="SEARCH FOR FRAGRANCES..." 
            className="search-mega-input"
            autoFocus
          />
          <button onClick={onClose} className="search-mega-close">✕</button>
        </div>

      </div>
    </>
  )
}
