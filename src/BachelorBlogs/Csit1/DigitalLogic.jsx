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
                    id: 'Cahpter1',
                    title: 'Binary Systems',
                    description: 'Description',
                    image: '#',
                    duration: '#',
                    level: '#'
                },
                {
                  id: 'Cahpter2',
                  title: 'Boolean Algebra',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
                },
                {
                  id: 'Cahpter3',
                  title: 'Simplification of Boolean Functions',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
                },
                {
                  id: 'Cahpter4',
                  title: 'Combinational Logic',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
                },
                {
                  id: 'Cahpter5',
                  title: 'Combinational Logic with MSI and LSI',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
                },
                {
                  id: 'Cahpter6',
                  title: 'Synchronous and Asynchronous Sequential Logic',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
                },
                {
                  id: 'Cahpter7',
                  title: 'Registers and Counters',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
                },
                {
                  id: 'model',
                  title: 'Model Question Paper',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
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