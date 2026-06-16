function Header() {
  return (
    <header className="header">
      <div>
        <h2 className="header-title">MemoryOS</h2>
        <p className="header-subtitle">
          Your Second Brain
        </p>
      </div>

      <button className="add-memory-btn">
        + Add Memory
      </button>
    </header>
  );
}

export default Header;