import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './TrainingAndProgram.css'; 

function TrainingAndProgram() {
  const programs = [
    {
      title: 'Program 1',
      description: 'Description for Program 1',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*0D9zGIQXQEIZFYD9tpRXgQ.png'
    },
    {
      title: 'Program 2',
      description: 'Description for Program 2',
      image: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4087150/cover_image/retina_1708x683/cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-e85854c3f0bb99704e83139475284901.png'
    },
    {
      title: 'Program 3',
      description: 'Description for Program 3',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzi2sdxYvSyiM3-0vr6eLlb-dKB-aeuq6mxg&s'
    },
    {
      title: 'Program 4',
      description: 'Description for Program 4',
      image: 'https://www.careerguide.com/career/wp-content/uploads/2023/08/DSA-1024x576.jpeg'
    },
    {
      title: 'Program 4',
      description: 'Description for Program 4',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FKRUcQojx3ruXrZwdJo4xXePiFuZeI8wUw&s'
    }
  ];


  const tuitions = [
    {
      title: 'Program 1',
      description: 'Description for Program 1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6u0g3ie8pn0L51MV8xdsVGPbxhUGOHKG-A&s'
    },
    {
      title: 'Program 2',
      description: 'Description for Program 2',
      image: 'https://www.euroschoolindia.com/wp-content/uploads/2023/10/what-is-vedic-mathss-for-kids-jpg.webp'
    },
    {
      title: 'Program 3',
      description: 'Description for Program 3',
      image: 'https://www.odmps.org/updates/wp-content/uploads/2022/01/3651141-scaled.jpg'
    },
    {
      title: 'Program 4',
      description: 'Description for Program 4',
      image: 'https://st.adda247.com/https://d2fldgtygklyv6.cloudfront.net/Daksh601615279097.png?tr=w-undefined'
    }
  ];

  return (
    <div>
      <Navbar />
      <section
        className="bg-cover bg-center"
        style={{
          background:
            "url('https://img.freepik.com/premium-photo/people-looking-financial-statements-with-table_674594-9530.jpg?w=900')",
          height: '450px',
          backgroundRepeat:"no-repeat",
          backgroundSize: '100%',
        }}
      >
        <div className="container h-100 d-flex align-items-center justify-content-center ">
          <div className="text-center ">
            <h1 className=" text-light " style={{fontSize:"50px", fontWeight:"bold"}}>
            Training and Programs
            </h1>
          </div>
        </div>
      </section>


      <div className="content1">
        <br/>
        <h1>Cources</h1><br/>
        <div className="card-containertap">
          {programs.map((program, index) => (
            <div className="cardstap" key={index}>
              <img src={program.image} alt={program.title} />
              <h2>{program.title}</h2>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </div>

      <section>
      <div className="content1">
        <br/>
        <h1>Tuition Classes </h1><br/>
        <div className="card-containertap">
          {tuitions.map((tuition, index) => (
            <div className="cardstap" key={index}>
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
