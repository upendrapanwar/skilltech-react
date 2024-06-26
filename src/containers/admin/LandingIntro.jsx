import logo from '../../assets/images/high-vista-guild.svg';
import intro from '../../assets/images/intro.png';


const LandingIntro = () => {
    return(
        <div className="hero min-h-full rounded-l-xl bg-base-200">
            <div className="hero-content py-12">
              <div className="max-w-md">
              <div className="admin-logo">
                    <img className="logo-img" src={logo} alt="" />
                  </div>

                {/* <h1 className='text-3xl text-center font-bold '>
                    High Vista Guild
                </h1> */}
              
              {/* Importing pointers component */}
              </div>

            </div>
          </div>
    )
}

export default LandingIntro