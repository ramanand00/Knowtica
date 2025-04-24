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
                    id: 'Data_Structure_and_Algorithm',
                    title: 'Data Structure and Algorithm ',
                    description: 'Description',
                    image: 'https://cdn.kobo.com/book-images/40fe7fb1-334b-4467-9a5d-eebe9d52b010/1200/1200/False/data-structures-and-algorithms.jpg',
                    duration: '90 days per semister',
                    level: 'Basic/Startup'
                },
                {
                    id: 'Numerical_Method',
                    title: 'Numerical Method',
                    description: 'Description ',
                    
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcq7PpmfBsIdndXHWE_vCbCsXJ05H8Qx1Ejw&s',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Computer_Architecture',
                    title: 'Computer Architecture',
                    description: 'Description',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0oeh2jS8EiKiBnNEm6CSd_aCV40s3MNQ5iA&s',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Computer_Graphics',
                    title: 'Computer Graphics',
                    description: 'Description',
                    image: 'https://bookstation.in/cdn/shop/files/COMPUTER-GRAPHICS-COMPUTER-ENGINEERING-AI-DS-SEM-3-001.jpg?v=1689147717',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Statistics_II',
                    title: 'Statistics II',
                    description: 'Description',
                    image: 'https://heritagebooks.com.np/wp-content/uploads/2022/01/Statistics-II.jpg',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Model',
                    title: 'Model Question Paper',
                    description: 'Description',
                    image: 'https://i.pinimg.com/736x/e9/0e/54/e90e541691d2ec8d98fa68c0f760495b.jpg',
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
            <PageHeader title="BSc.CSIT Third Semister" path="/BSc.CSIT" name="BSc.CSIT" />
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