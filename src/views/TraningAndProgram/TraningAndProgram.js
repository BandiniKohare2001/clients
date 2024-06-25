import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import tapimg from "./tapimg.png";
import './TrainingAndProgram.css'; // Assuming this file contains your CSS styles
import { Link } from 'react-router-dom';

function TrainingAndProgram() {
  const programs = [
    {
        title: 'Programming in C',
        description: 'Learn the fundamentals of programming using the C language. Understand variables, control structures, functions, and memory management.',
        image: 'https://miro.medium.com/v2/resize:fit:1400/1*0D9zGIQXQEIZFYD9tpRXgQ.png'
    },
    {
        title: 'Programming in C++',
        description: 'Explore object-oriented programming concepts with C++. Master classes, inheritance, polymorphism, and advanced data structures.',
        image: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4087150/cover_image/retina_1708x683/cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-e85854c3f0bb99704e83139475284901.png'
    },
    {
        title: 'Programming in Python',
        description: 'Dive into Python programming language known for its simplicity and versatility. Learn about data types, loops, functions, and libraries like NumPy and Pandas.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzi2sdxYvSyiM3-0vr6eLlb-dKB-aeuq6mxg&s'
    },
    {
        title: 'Data Structures and Algorithms',
        description: 'Gain proficiency in fundamental data structures such as arrays, linked lists, stacks, queues, trees, and graphs. Understand algorithm design and analysis techniques.',
        image: 'https://www.careerguide.com/career/wp-content/uploads/2023/08/DSA-1024x576.jpeg'
    },
    {
        title: 'Full Stack Development',
        description: 'Master both front-end and back-end web development. Learn technologies like HTML, CSS, JavaScript, Node.js, React, and databases such as MongoDB.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FKRUcQojx3ruXrZwdJo4xXePiFuZeI8wUw&s'
    }
  ];

  const tuitions = [
    {
        title: 'English Speaking',
        description: 'Enhance your English speaking skills with our comprehensive program. Learn vocabulary, grammar, pronunciation, and conversation skills in a supportive and interactive environment.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6u0g3ie8pn0L51MV8xdsVGPbxhUGOHKG-A&s'
    },
    {
        title: 'Math',
        description: 'Explore the world of mathematics with our engaging tuition program. From arithmetic to advanced calculus, our expert instructors will guide you through each concept step-by-step.',
        image: 'https://www.euroschoolindia.com/wp-content/uploads/2023/10/what-is-vedic-mathss-for-kids-jpg.webp'
    },
    {
        title: 'Science',
        description: 'Dive into the wonders of science through our hands-on tuition program. Discover biology, chemistry, physics, and more with practical experiments and captivating lessons.',
        image: 'https://www.odmps.org/updates/wp-content/uploads/2022/01/3651141-scaled.jpg'
    }
  ];

  // Define an array of colors for the cards
  const cardColors = ['#ffffb3', '#ccfff5', '#ffb3b3', '#b3ffb3', '#cce0ff']; // Example colors

  return (
    <div>
      <Navbar />
      <section
        className="bg-cover bg-center"
        style={{
          background: "url('https://img.freepik.com/premium-photo/people-looking-financial-statements-with-table_674594-9530.jpg?w=900')",
          height: '450px',
          backgroundRepeat:"no-repeat",
          backgroundSize: '100%',
        }}
      >
        <div className="container h-100 d-flex align-items-center justify-content-center ">
          <div className="text-center ">
            <h1 className="text-light" style={{ fontSize:"50px", fontWeight:"bold" }}>
              Training and Programs
            </h1>
          </div>
        </div>
      </section>

      <div className=' mt-5 div-tap-row' style={{  backgroundColor: "#f5e6ff" }}>
        <div className='me-4 img-tution'>
          <img src={tapimg} style={{
            filter: "drop-shadow(0 0 10px black)",
            padding:"30px",
            height: "450px"
          }} />
        </div>

        <div className="mt-10 tap-cards" >
          <div className="ms-5 w-full md:w-1/3 px-4 py-3" style={{ backgroundColor: "" }}>
            <h2 className="text-2xl font-bold text-gray-800 my-5">Training and Programs</h2>
            <p className="mt-2 text-gray-600 text-start" style={{  fontSize:"20px" , width:"100%" }}>
              SKT Technologies Training Program is designed to equip professionals and aspiring technologists with the skills and knowledge required to excel in the rapidly evolving field of information technology. Our comprehensive programs offer hands-on training, expert instruction, and real-world applications to ensure participants are well-prepared for the challenges of the tech industry.
            </p>
          </div>
        </div>
      </div>

      <div className="content1">
        <br />
        <h1>Courses</h1><br/>
        <div className="card-containertap" >
          {programs.map((program, index) => (
            <div className="cardstap" key={index} style={{ backgroundColor: cardColors[index % cardColors.length] }}>
              <img src={program.image} alt={program.title} />
              <h3 className='mt-3'>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </div>

      <section>
        <div className="content1">
          <br />
          <h1>Tuition Classes</h1><br/>
          <div className="card-containertap">
            {tuitions.map((tuition, index) => (
              <div className="cardstap" key={index} style={{ backgroundColor: cardColors[(index + programs.length) % cardColors.length] }}>
                <img src={tuition.image} alt={tuition.title} />
                <h2>{tuition.title}</h2>
                <p>{tuition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default TrainingAndProgram;
