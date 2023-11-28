function Header() {
    return (
        <div style={{ position: 'relative' }}>
      <h1 className="text-8xl sans-serif mt-12 text-blue-300 " style={{ fontFamily: 'Dosis', position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>Blog</h1>
      <img className="img mt-24 " src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="library" style={{ width: '95%',height:'650px',
        objectFit:'cover', marginTop:'80px', marginRight:'2%',marginLeft:'2.5%'
    }} />
    </div>
    );
  }
  
  export default Header;
  