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
                    id: 'Software Engineering',
                    title: 'Software Engineering',
                    description: 'Description',
                    image: 'https://img.drz.lazcdn.com/static/np/p/350ae1372f60b26bc26f0dfd3f3ec622.jpg_720x720q80.jpg',
                    duration: '90 days per semister',
                    level: 'Basic/Startup'
                },
                {
                    id: 'E-Governance',
                    title: 'E-Governance',
                    description: 'Description ',
                    
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG70dkCUaV2U2eJObp8nq3lZfoOcC9jsz_NA&s',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'NET Centric Computing',
                    title: 'NET Centric Computing',
                    description: 'Description',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPYxLfJnf3unDVDIqGbHpVoRRqLSCjbh7Ng&s',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Elective II',
                    title: 'Elective II',
                    description: 'Description',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Q8SSbatEnYw0cXs0X82jLgWnB3ny18pZbQ&s',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Technical Wiring',
                    title: 'Technical Wiring',
                    description: 'Description',
                    image: 'https://m.media-amazon.com/images/I/61JOair8H+L._AC_UF1000,1000_QL80_.jpg',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Compiler Design and Construction',
                    title: 'Compiler Design and Construction',
                    description: 'Description',
                    image: 'https://technicalpublications.in/cdn/shop/products/9789355853967_1.jpg?v=1685358984',
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
            <PageHeader title="BSc.CSIT Sixth Semister" path="/BSc.CSIT" name="BSc.CSIT" />
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