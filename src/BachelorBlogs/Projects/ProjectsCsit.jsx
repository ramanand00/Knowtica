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
            id: 'ProjectsCsit',
            title: 'Welcome to The Real World of Information Technology',
            courses: [
                {
                    id: 'Blockchain Projects',
                    title: 'Blockchain Projects',
                    description: 'Description',
                    image: 'https://cdn.pixabay.com/photo/2019/08/21/02/57/network-4420048_1280.jpg',
                    duration: '90 days per semister',
                    level: 'Basic/Startup'
                },
                {
                    id: 'AR & VR Projects',
                    title: 'AR & VR Projects',
                    description: 'Description ',
                    image: 'https://cdn.pixabay.com/photo/2024/05/19/19/47/ai-generated-8773231_1280.png',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Information Security Projects',
                    title: 'Information Security Projects',
                    description: 'Description',
                    image: 'https://cdn.pixabay.com/photo/2018/05/31/10/51/cyber-security-3443628_1280.jpg',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Artificial Intelligence Projects',
                    title: 'Artificial Intelligence Projects',
                    description: 'Description',
                    image: 'https://cdn.pixabay.com/photo/2022/04/04/16/42/ai-7111803_1280.jpg',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Cloud Computing Projects',
                    title: 'Cloud Computing Projects',
                    description: 'Description',
                    image: 'https://cdn.pixabay.com/photo/2023/03/06/05/52/cloud-7832679_1280.jpg',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Data Science Projects',
                    title: 'Data Science Projects',
                    description: 'Description',
                    image: 'https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_1280.jpg',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Machine Learning Projects',
                    title: 'Machine Learning Projects',
                    description: 'Description',
                    image: 'https://cdn.pixabay.com/photo/2024/07/10/09/30/ai-generated-8885336_1280.jpg',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Web Development Projects',
                    title: 'Web Development Projects',
                    description: 'Description',
                    image: 'https://cdn.pixabay.com/photo/2024/05/21/19/57/computer-8779036_1280.jpg',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Mobile Development Projects',
                    title: 'Mobile Development Projects',
                    description: 'Description',
                    image: 'https://cdn.pixabay.com/photo/2016/03/16/09/47/objectives-1260139_1280.jpg',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Cyber Security Projects',
                    title: 'Cyber Security Projects',
                    description: 'Description',
                    image: 'https://cdn.pixabay.com/photo/2023/07/19/06/20/ai-generated-8136170_1280.png',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Ethical Hacking Projects',
                    title: 'Ethical Hacking Projects',
                    description: 'Description',
                    image: 'https://cdn.pixabay.com/photo/2018/10/06/16/10/security-3728124_1280.jpg',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Internet of Things Projects',
                    title: 'Internet of Things Projects',
                    description: 'Description',
                    image: 'https://cdn.pixabay.com/photo/2023/06/03/15/01/computer-8037837_1280.jpg',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Digital Marketing Projects',
                    title: 'Digital Marketing Projects',
                    description: 'Description',
                    image: 'https://cdn.pixabay.com/photo/2024/02/08/02/53/digital-8560051_1280.jpg',
                    duration: '90 days per semister',
                },
                {
                    id: 'Game Development Projects',
                    title: 'Game Development Projects',
                    description: 'Description',
                    image: 'https://cdn.pixabay.com/photo/2024/08/03/20/18/ai-generated-8943016_1280.jpg',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Robotics Projects',
                    title: 'Robotics Projects',
                    description: 'Description',
                    image: 'https://cdn.pixabay.com/photo/2023/10/09/11/31/woman-8303937_1280.png',
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
            <PageHeader title="BSc.CSIT Last/Eighth Semister" path="/BSc.CSIT" name="BSc.CSIT" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Our Projects for you</h1>
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
                                                    View Projects
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