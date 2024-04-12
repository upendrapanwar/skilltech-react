import React, { useEffect, useRef, useState } from "react";
import banner from "../assets/images/homeBanner.svg";
import about from "../assets/images/about-3-5.svg";
import grid1 from "../assets/images/grid1.svg";
import grid2 from "../assets/images/grid2.svg";
import highVista from "../assets/images/4-410x260_1.svg";
import employability from "../assets/images/Employability.png";
import processimg from "../assets/images/Process.png";
import brokenArrow from "../assets/images/solar_arrow-up-broken.svg";
import brokenBlu from "../assets/images/solar_arrow-up-broken-blu.svg";
import graduationHat from "../assets/images/graduation-hat.svg";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import solarArrowUpBroken from "../assets/images/solar_arrow-up-broken.svg";
import authenticBookClub from "../assets/images/authentic-book-club-scene-3-min1.jpg";
import womanSitting from "../assets/images/woman-sitting-library-with-her-laptop-min1.jpg";
import Modal from "../components/common/Modal";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  const [myApi, setMyApi] = useState([]);
  let [coursedData, setCoursedData] = useState(null);
  let [categoryData, setCategoryData] = useState(null);
  let [course, setCourse] = useState(null);
  const prevSearch = usePrevious({ course, setCourse });
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchUser, setSearchUser] = useState("");
  const [totalPost, setTotalPost] = useState(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [expandedItem, setExpandedItem] = useState(null);
  let premiumCourseFirstId = 4;
  let premiumCourseFirstImage = grid1;
  let premiumCourseFirstTitle = "Employability Programme";
  let premiumCourseFirstPrice = 1700;
  let premiumCoursePaymentType = "one_off";

  let premiumCourseSecondId = 8;
  let premiumCourseSecondImage = grid1;
  let premiumCourseSecondTitle =
    "Process Incoming and Outgoing Telephone Calls";
  let premiumCourseSecondPrice = 450;

  useEffect(() => {
    getAllCourses();
    getCoursesCategories();
  }, [course]);
  toast.configure();
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Redirects to login page
   *
   */
  const handleLoginIn = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Redirects to browse courses page
   *
   */
  const handleBrowseCourse = () => {
    navigate("/browse-courses");
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Redirects to course details page
   *
   */
  const handleVistaDetails = (title) => {
    navigate("/courses-details", { state: { title: title } }); 
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Redirects to premium courses page
   *
   */
  // const handlePremiumCourses = (e) => {
  //   e.preventDefault();
  //   window.open("https://skilltechsa.online/");
  // };
  /***********************************************************************/
  /***********************************************************************/

  const items = [
    {
      id: 1,
      title: "What does a Subscription cost?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?",
    },
    {
      id: 2,
      title: "What is included in your monthly Subscription?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?",
    },
    {
      id: 3,
      title: "Who can become a Subscriber?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?",
    },
    {
      id: 4,
      title: "Who can become an Ambassador?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?",
    },
    {
      id: 5,
      title:
        "How do I switch from being a Subscriber to becoming an Ambassador?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?",
    },
    {
      id: 6,
      title: "What does it cost to become an Ambassador?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?",
    },
    {
      id: 7,
      title: "Can I cancel my Subscription?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore ab ipsam dolore suscipit ea atque illo dicta doloribus recusandae cupiditate voluptates alias laudantium aliquid, maxime, reiciendis praesentium labore nobis?",
    },
  ];

  const toggleDescription = (itemId) => {
    setExpandedItem((prevItem) => (prevItem === itemId ? null : itemId));
  };

  // For Browse course part
  /***********************************************************************/
  /***********************************************************************/
  function usePrevious(value) {
    const ref = useRef(null);
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  /**
   * Handle pop up modal close
   */
  const handleClose = () => {
    setOpen(false);
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Handle pop up modal open
   */
  const handleOpen = (id) => {
    return;
    setOpen(true);
    try {
      var apiUrl =
        process.env.REACT_APP_MOODLE_COURSES_URL +
        "?wstoken=" +
        process.env.REACT_APP_MOODLE_TOKEN +
        "&moodlewsrestformat=json&wsfunction=core_course_get_courses&options[ids][0]=" +
        id;
      axios.get(apiUrl).then((response) => {
        if (response.status === 200) {
          console.log("course=", course);
          if (prevSearch.course === course && course != null) {
            return false;
          }
          //setCoursedData(response.data);
          setCourse(response.data);
        } else {
          setCourse(null);
        }
        console.log("response=", response.data);
        return true;
      });
    } catch (err) {
      return false;
    }
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * create short description from summary
   *
   * @param {*} str
   * @returns
   */
  const createExcerpt = (str) => {
    let d = document.createElement("div");
    d.innerHTML = str;
    str = d.textContent || d.innerText || "";
    //str = str.trim();
    //console.log('string=',typeof(str))
    if (str.length > 10) {
      str = str.slice(0, 210) + "...";
    }
    return str;
  };
  /***********************************************************************/
  /***********************************************************************/

  const Search = ({ onChange }) => {
    return (
      <div className="row">
        <div className="col-md-8">
          <input
            className="form-control"
            type="text"
            autoFocus={true}
            placeholder="Search Course"
            onChange={onChange}
          />
        </div>
      </div>
    );
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Get all the courses from moodle web services
   *
   */
  const renderData = (data) => {
    return data.map((item, idx) => (
      <div key={idx} className="course_item">
        <a href="/" className="course-grid">
          <figure className="figure">
            <img
              src={grid1}
              className="figure-img img-fluid rounded"
              alt={item.fullname}
            />
          </figure>
          <div className="course-details">
            <h4>{item.fullname}</h4>
            <div className="course_footer d-flex justify-content-between align-items-center">
              <span className="amb-btn mt-4">
                <button
                  type="button"
                  className="btn btn-primary btn-color bt-size"
                >
                  REGISTER NOW
                  <span className="arrow-btn">
                    <img src={solarArrowUpBroken} alt="" />
                  </span>
                </button>
              </span>
              {/*<span className="mt-4">R500</span>*/}
            </div>
          </div>
        </a>
      </div>
    ));
  };
  /***********************************************************************/
  /***********************************************************************/
  /**
   * Get all the courses from moodle web services
   *
   */
  const getAllCourses = () => {
    try {
      var apiUrl =
        process.env.REACT_APP_MOODLE_COURSES_URL +
        "?wstoken=" +
        process.env.REACT_APP_MOODLE_TOKEN +
        "&moodlewsrestformat=json&wsfunction=core_course_get_courses&options[ids][0]=4&options[ids][1]=8&options[ids][2]=9&options[ids][3]=16&options[ids][4]=19";
      axios.get(apiUrl).then((response) => {
        if (response.status === 200) {
          //console.log('data=',JSON.stringify(response.data));
          setCoursedData(response.data);
          let myApi = renderData(response.data);

          console.log("myApi=", myApi);
          setMyApi(myApi);
          setTotalPost(response.data.length);
        } else {
          setCoursedData(null);
        }
        console.log("response=", response.data);
      });
    } catch (err) {
      return false;
    }
  };
  /***********************************************************************/
  /***********************************************************************/

  /**
   * Get all the courses from moodle web services
   *
   */
  const getCoursesCategories = () => {
    try {
      var apiUrl =
        process.env.REACT_APP_MOODLE_COURSES_URL +
        "?wstoken=" +
        process.env.REACT_APP_MOODLE_TOKEN +
        "&moodlewsrestformat=json&wsfunction=core_course_get_categories";
      axios.get(apiUrl).then((response) => {
        if (response.status === 200) {
          //console.log('data=',JSON.stringify(response.data));
          setCategoryData(response.data);
        } else {
          setCategoryData(null);
        }
        console.log("response=", response.data);
      });
    } catch (err) {
      return false;
    }
  };
  /***********************************************************************/
  /***********************************************************************/

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = myApi?.slice(indexOfFirstPost, indexOfLastPost);

  /**
   * Redirects to course details page
   *
   */
  // const handleVistaDetails = (title) => {
  //     navigate('/courses-details',{state:{"title":title}});
  // }
  /***********************************************************************/
  /***********************************************************************/

  /**
   * Redirects to premium courses page
   *
   */
  const handlePremiumCourses = () => {
    navigate("/premium-courses");
  };
  /***********************************************************************/
  /***********************************************************************/
  const handleSubscribeNow = () => {
    navigate("/learner/subscription");
  };
  /***********************************************************************/
  /***********************************************************************/
  // search users by user input
  const handleSearchInput = (event) => {
    setSearchUser(event.target.value);
    const newData = renderData(
      coursedData.filter((item) =>
        //item.fullname.toLowerCase().includes(event.target.value)
        item.fullname.includes(event.target.value)
      )
    ); // render filtered data

    setMyApi(newData); // and set it to state
    console.log("api length", coursedData.length);
  };
  /***********************************************************************/
  /***********************************************************************/
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const longText =
    "Our refer-a-friend program is a win-win scenario that offers numerous benefits to its participants, primarily serving as a legitimate means to earn passive income. Unlike pyramid schemes, which are illegal and unsustainable, a refer-a-friend program encourages individuals to invite others within their network to become subscribers. Participants can enjoy rewards and incentives for their referrals making it a reliable source of passive income while advocating for products or services they believe in. By referring those in your network to subscribe to our catalogue of digital learning you can earn 50% of the subscription fee for every referral every month for as long as they stay signed up. This can be done through the Ambassador programme. You need to be a Subscriber to qualify for our refer-a-friend program and become eligible to earn a passive income. Once subscribed, sign up as an Ambassador. For more information about our refer-a-friend programme go to “Become an Ambassador”.";

  const maxLength = 300;
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  const truncatedText = longText.slice(0, maxLength);
  const displayText = showFullText ? longText : `${truncatedText}...`;

  return (
    <>
      <Header />

      {/* <div className="hvg__main_container">
        <div className="hvg__home_banner">
          <div className="hvg__banner_inner">
            <div className="hvg__banner_pic">
              <img src={banner} alt="" />
            </div>
          </div>
        </div>
      </div> */}

      <section>
        <div className="home-about">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="home-about-content-wrapper">
                  <div className="content-heading">
                    <h3 className="mb-3">
                      <span className="black" style={{ color: "#000000" }}>
                        Earn a
                      </span>{" "}
                      <br />
                      <span className="red" style={{ color: "#EB5757" }}>
                        Passive Income
                      </span>
                      <br />
                      <span className="black" style={{ color: "#000000" }}>
                        while You Learn
                      </span>
                    </h3>
                  </div>
                  <div className="content-para">
                    <p>{displayText}</p>
                    {longText.length > maxLength && (
                      <button
                        onClick={toggleText}
                        type="button"
                        className="btn btn-primary btn-color bt-size mb-4"
                      >
                        {showFullText ? "View Less" : "View More"}
                        <span className="arrow-btn">
                          <img src={brokenArrow} alt="" />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="home-about-img-wrapper">
                  <img className="home-about-img2" src={about} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Courses part: */}
      <section className="courseCat-section bg-blue">
        <div className="container">
          <div className="row home_course_container mt-0">
            <div className="col-md-6">
              <div className="catimg-wrapper">
                <div className="table-pie-image mt-2">
                  <img src={highVista} alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="courseCat-content">
                <div className="table-heading">
                  <h3>Become a High Vista Guild Subscriber</h3>
                  <p className="pb-2 content-para">
                  At the High Vista Guild, we believe in the power of lifelong learning. That’s why
                  we’ve developed 10 unique online short courses, tailor-made with your interests in
                  mind. Whether you're looking at starting your own business, unleashing the power
                  of social media income, epic event planning or mastering the art of blogging, our
                  courses have something for everyone.
                  </p>
                  {/*<p className="priceperMonth"><span>R500 /</span> per month</p>*/}
                </div>
                <div className="amb-btn mt-4">
                  <button
                    type="button"
                    className="btn btn-primary btn-color bt-size"
                    onClick={() =>
                      handleVistaDetails("The High Vista Course Package")
                    }
                  >
                    Learn More
                    <span className="arrow-btn">
                      <img src={solarArrowUpBroken} alt="My Happy SVG" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
          
          <div className="vista_container">
          <div className="container">       
          <div className="row home_course_container ">
            

            <div className="col-md-6 ">
              <div className="courseCat-content">
                <div className="table-heading">
                <div className="content-heading">
                    <h3 className="mb-3">
                      <span className="black" style={{ color: "#ffffff" }}>
                        More ways to
                      </span>{" "}
                      <span className="red" style={{ color: "#EB5757" }}>
                        learn
                      </span>
                      <br />
                      <span className="black" style={{ color: "#ffffff" }}>
                        More ways to
                      </span>{" "}
                      <span className="red" style={{ color: "#EB5757" }}>
                        earn
                      </span>
                    </h3>
                  </div>
                  <h4 className="mt-4" style={{ color: "#ffffff" }}>Become a High Vista Guild Ambassador</h4>
                  <p className="pb-2 content-para" style={{ color: "#ffffff" }}>
                  Join the High Vista Course Programme and seize the opportunity to become an
                  Ambassador! As an Ambassador, you'll receive a referral fee for each person in your
                  network — be it family, friends, colleagues, or acquaintances — who enrolls in the
                  High Vista Guild course programme, and you'll continue to earn for as long as they
                  remain active, paying subscribers. Don't miss out on this opportunity to both
                  enhance your learning and earn rewards. Subscribe to the High Vista Course
                  Programme today and unlock your pathway to becoming an Ambassador!
                  </p>
                  {/*<p className="priceperMonth"><span>R500 /</span> per month</p>*/}
                </div>
                <div className="amb-btn mt-4">
                  <button
                    type="button"
                    className="btn btn-white-color bt-size"
                    onClick={() =>
                      handleVistaDetails("Become a High Vista Guild Ambassador")
                    }
                  >
                    Learn More
                    <span className="arrow-btn">
                      <img src={solarArrowUpBroken} alt="My Happy SVG" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="catimg-wrapper">
                <div className="table-pie-image mt-2">
                  <img src={authenticBookClub} alt="" />
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>

          <div className="container">
          {/* <div className="row home_course_container">
            <div className="col-md-6">
              <div className="catimg-wrapper">
                <div className="table-pie-image mt-2">
                  <img src={womanSitting} alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="courseCat-content">
                <div className="table-heading">
                  <h3>Our Premium Courses</h3>
                  <p className="pb-2 content-para">
                  Embark on a transformative journey with our high-impact premium courses,
                  designed to equip you with the essential knowledge for a monumental leap forward
                  in your career. Discover these exclusive offerings on our digital campus or delve
                  deeper into their details below.
                  Please note that these premium courses are exclusive and not covered under your
                  monthly subscription. However, we offer an exciting opportunity through our High
                  Vista Ambassador Program. As a High Vista Ambassador, you can unlock these
                  premium courses at no extra cost by achieving specific referral milestones. The more

                  successful referrals you contribute, the greater your access to our premium course
                  selection without any additional charges. Interested in this rewarding journey? Go to
                  "Become a High Vista Ambassador".
                  </p>
                </div>
                <div className="amb-btn mt-4">
                  <button
                    type="button"
                    className="btn btn-primary btn-color bt-size"
                    onClick={handlePremiumCourses}
                  >
                    Learn More
                    <span className="arrow-btn">
                      <img src={solarArrowUpBroken} alt="My Happy SVG" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div>
          <Modal
            isOpen={open}
            onClose={handleClose}
            style={{
              position: "absolute",
              border: "2px solid #000",
              backgroundColor: "lightgray",
              boxShadow: "2px solid black",
              height: 150,
              width: 240,
              margin: "auto",
              padding: "2%",
              color: "white",
            }}
          >
            <>
              {course &&
                course.map((item, i) => (
                  <div className="row">
                    <div className="col-md-6">
                      <div className="catimg-wrapper">
                        <div className="table-pie-image mt-2">
                          <img src={highVista} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 ">
                      <div className="courseCat-content">
                        <div className="table-heading">
                          <h3>{item.fullname}</h3>
                          <p className="pb-2">{createExcerpt(item.summary)}</p>
                          <p className="priceperMonth">
                            <span>R1500,00 /</span> per month{" "}
                          </p>
                        </div>
                        <div className="amb-btn mt-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-color bt-size"
                            onClick={handleOpen(item.id)}
                          >
                            Learn More
                            <span className="arrow-btn">
                              <img
                                src={solarArrowUpBroken}
                                alt="My Happy SVG"
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          </Modal>
        </div>
      </section>

      {/* <section className="hvg__section hvg__cta_section">
        <div className="container">
          <div className="row">
            <div className="call-to-action-wrapper text-center">
              <h3 className="mb-4">FAQs</h3>
              <div className="home__faqContainer">
                <div className="home__faq_innerContainer">
                  {items.map((item) => (
                    <div className="home__innerContainer" key={item.id}>
                      <div
                        className="home__Container"
                        onClick={() => toggleDescription(item.id)}
                        style={{ cursor: "pointer" }}
                      >
                        {expandedItem === item.id ? " - " : " + "}
                        {item.title}
                      </div>
                      {expandedItem === item.id && <p>{item.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="front_counter">
              <div className="counter_item">
                <h3 className="counter_num">50</h3>
                <span className="counter_label">
                  PROFESSIONAL
                  <br />
                  INSTRUCTORS
                </span>
              </div>
              <div className="counter_item">
                <h3 className="counter_num">68</h3>
                <span className="counter_label">
                  NEW COURSES
                  <br />
                  EVERY YEAR
                </span>
              </div>
              <div className="counter_item">
                <h3 className="counter_num">16</h3>
                <span className="counter_label">
                  LIVE SESSIONS
                  <br />
                  EVERY MONTH
                </span>
              </div>
              <div className="counter_item">
                <h3 className="counter_num">250</h3>
                <span className="counter_label">
                  REGISTERED
                  <br />
                  STUDENTS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="hvg__section hvg__cta_section">
        <div className="container">
          <div className="row">
            <div className="call-to-action-wrapper text-center">
              <h3 className="mb-4">FAQs</h3>
              <div className="home__faqContainer">
                <div className="row">
                  <div className="col-md-6">
                    <div className="home__faq_innerContainer">
                      {items
                        .slice(0, Math.ceil(items.length / 2))
                        .map((item) => (
                          <div className="home__innerContainer" key={item.id}>
                            <div
                              className="home__Container"
                              onClick={() => toggleDescription(item.id)}
                              style={{ cursor: "pointer" }}
                            >
                              {expandedItem === item.id ? " - " : " + "}
                              {item.title}
                            </div>
                            {expandedItem === item.id && (
                              <p>{item.description}</p>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="home__faq_innerContainer">
                      {items.slice(Math.ceil(items.length / 2)).map((item) => (
                        <div className="home__innerContainer" key={item.id}>
                          <div
                            className="home__Container"
                            onClick={() => toggleDescription(item.id)}
                            style={{ cursor: "pointer" }}
                          >
                            {expandedItem === item.id ? " - " : " + "}
                            {item.title}
                          </div>
                          {expandedItem === item.id && (
                            <p>{item.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
