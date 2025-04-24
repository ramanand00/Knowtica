import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/courses.css';

const Csit = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const courseCategories = [
        {
            id: 'frontend',
            title: 'Hello ITians... Welcome to BSc.CSIT',
            courses: [
                {
                    id: 'Chapter1',
                    title: 'Introduction to Computer',
                    description: 'Description',
                    image: '#',
                    duration: '90 days per semister',
                    level: 'Basic/Startup'
                },
                {
                    id: 'Chapter2',
                    title: 'The Computer System Hardware',
                    description: 'Description ',
                    image: '#',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Chapter3',
                    title: 'Computer Memory',
                    description: 'Description',
                    image: '#',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Chapter4',
                    title: 'Input and Output Devices',
                    description: 'Description',
                    image: '#',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Chapter5',
                    title: 'Data Representation',
                    description: 'Description',
                    image: '#',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                  {
                     id: 'Chapter6',
                     title: 'Computer Software',
                     description: 'Description',
                     image: '#',
                     duration: '90 days per semister',
                     level: 'Intermediate'
                  },
                  {
                     id: 'Chapter7',
                     title: 'Ddata Communication and Computer Network',
                     description: 'Description',
                     image: '#',
                     duration: '90 days per semister',
                     level: 'Intermediate'
                  },
                     
                     {
                        id: 'Chapter8',
                        title: 'The Internet and Internet Services',
                        description: 'Description',
                        image: '#',
                        duration: '90 days per semister',
                        level: 'Intermediate'
                     },
                     {
                        id: 'Chapter9',
                        title: 'Fundamentals of Database',
                        description: 'Description',
                        image: '#',
                        duration: '90 days per semister',
                        level: 'Intermediate'
                     },
                     {
                        id: 'Chapter10',
                        title: 'Multimedia',
                        description: 'Description',
                        image: '#',
                        duration: '90 days per semister',
                        level: 'Intermediate'
                     },
                     {
                        id: 'Chapter11',
                        title: 'Computer Security',
                        description: 'Description',
                        image: '#',
                        duration: '90 days per semister',
                        level: 'Intermediate'
                     },
                {
                    id: 'Model',
                    title: 'Model Question Paper',
                    description: 'Description',
                    image: '#',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                }
            ]
        }
    ];

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const filterCourses = (courses) => {
        if (!searchQuery) return courses;
        return courses.filter(course => 
            course.title.toLowerCase().includes(searchQuery) ||
            course.description.toLowerCase().includes(searchQuery)
        );
    };

    return (
        <>
            <Navbar />
            <PageHeader title="BSc.CSIT First Semister" path="/BSc.CSIT/Csit1" name="BSc.CSIT" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Our courses</h1>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search courses..."
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                    
                    {courseCategories.map((category) => {
                        const filteredCourses = filterCourses(category.courses);
                        if (filteredCourses.length === 0) return null;
                        
                        return (
                            <div key={category.id} className="category-section">
                                <h2 className="category-title">{category.title}</h2>
                                <div className="courses-grid">
                                    {filteredCourses.map((course) => (
                                        <div key={course.id} className="course-card">
                                            <div className="course-image">
                                                <img src={course.image} alt={course.title} />
                                            </div>
                                            <div className="course-content">
                                                <h3>{course.title}</h3>
                                                <p>{course.description}</p>
                                                <div className="course-meta">
                                                    <span className="duration">Duration: {course.duration}</span>
                                                    <span className="level">Level: {course.level}</span>
                                                </div>
                                                <Link to={`/BSc.CSIT/${course.id}`} className="view-course-button">
                                                    View Course
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
            <BackToTop />
        </>
    );
};

export default Csit; 