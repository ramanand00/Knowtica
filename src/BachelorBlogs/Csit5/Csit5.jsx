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
                    id: 'Design and Analysis of Algorithm',
                    title: 'Design and Analysis of Algorithm',
                    description: 'Description',
                    image: 'https://technicalpublications.in/cdn/shop/products/9789355851239_1_36e22e2f-47e4-47a6-9673-9d32aaa949a1.jpg?v=1688627816',
                    duration: '90 days per semister',
                    level: 'Basic/Startup'
                },
                {
                    id: 'System Analysis and Design',
                    title: 'System Analysis and Design',
                    description: 'Description ',
                    
                    image: 'https://pictures.abebooks.com/isbn/9780357237649-us.jpg',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Cryptography',
                    title: 'Cryptography',
                    description: 'Description',
                    image: 'https://learning.oreilly.com/library/cover/9781482228892/250w/',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Simulation and Modeling',
                    title: 'Simulation and Modeling',
                    description: 'Description',
                    image: 'https://www.simio.com/wp-content/uploads/2024/07/workbook_5e_cover_3d.png',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Web Technology',
                    title: 'Web Technology',
                    description: 'Description',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVN3ihbNmC9GnMYoY0HXs8QRH-k9NzwFmtA&s',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Elective I',
                    title: 'Elective I',
                    description: 'Description',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Q8SSbatEnYw0cXs0X82jLgWnB3ny18pZbQ&s',
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
            <PageHeader title="BSc.CSIT Fifth Semister" path="/BSc.CSIT" name="BSc.CSIT" />
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
                                                <Link to={`/csit/${course.id}`} className="view-course-button">
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