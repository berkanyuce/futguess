const Header = () => {

    return (
      <header className="bg-blue-500 p-4 flex justify-between items-center">
        <div>
          <h1 className="text-white text-2xl font-bold">FutGuess</h1>
        </div>
        <div className="text-white flex items-center space-x-4">
          <p>User1</p>
          <p>Bakiye: $100</p>
          <p>Çıkış Yap</p>
        </div>
      </header>
    )
    
}

export default Header