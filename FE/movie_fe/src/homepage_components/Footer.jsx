function Footer() {
  return (
    <>
      <footer className="">
        <div className="max-w-screen-lg m-auto mt-14 ">
          <div className="grid-cols-4 grid gap-2 mb-8">
            <div className="w-full">
              <h3 className="font-semibold  ">Profile</h3>
              <ul className="text-xs">
                <li className="mt-2">FAQ’s</li>
                <li className="mt-2">Pricing plans</li>
                <li className="mt-2">Order tracking</li>
                <li className="mt-2">Returns</li>
              </ul>
            </div>
            <div className="w-full">
              <h3 className="font-semibold ">Recent Posts</h3>
              <ul className="text-xs">
                <li className="mt-2">Touch of uniqueness</li>
                <li className="mt-2">Offices you won’t forget</li>
                <li className="mt-2">Cicilan</li>
              </ul>
            </div>
            <div className="w-full">
              <h3 className="font-semibold mb-4">CUSTOMER</h3>
              <ul className="text-xs">
                <li className="mt-2">Help & contact us</li>
                <li className="mt-2">Return</li>
                <li className="mt-2">Online stores</li>
                <li className="mt-2">Terms & cordition</li>
              </ul>
            </div>
            <div className="w-full">
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="text-xs">
                <li className="mt-2">+84 234 567 890</li>
                
              </ul>
            </div>
          </div>
          <div className="h-0.5 w-full bg-slate-400 mb-4"></div>
          <p className="text-slate-500 text-xs">© 2014 Nizami cinema. All Right Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
