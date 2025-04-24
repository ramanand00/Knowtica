import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/courses.css';

const ArtificialIntelligence = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const courseCategories = [
        {
            id: 'artificial-intelligence',
            title: 'Artificial Intelligence (CSC261)',
            courses: [
                {
                    id: 'Unit1',
                    title: 'Introduction',
                    description: 'Introduction to AI, perspectives of AI, history, and applications.',
                    image: '#',
                    duration: '3 Hrs.',
                    level: 'Beginner'
                },
                {
                    id: 'Unit2',
                    title: 'Intelligent Agents',
                    description: 'Understanding intelligent agents, their structure, types, and environments.',
                    image: '#',
                    duration: '4 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit3',
                    title: 'Problem Solving by Searching',
                    description: 'Problem formulation and various search strategies like DFS, BFS, and A* search.',
                    image: '#',
                    duration: '9 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit4',
                    title: 'Knowledge Representation',
                    description: 'Techniques for representing knowledge using semantic nets, frames, logic, and fuzzy logic.',
                    image: '#',
                    duration: '14 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit5',
                    title: 'Machine Learning',
                    description: 'Introduction to machine learning, types, algorithms, and neural networks.',
                    image: '#',
                    duration: '9 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit6',
                    title: 'Applications of AI',
                    description: 'Applications of AI, including expert systems, NLP, machine vision, and robotics.',
                    image: '#',
                    duration: '6 Hrs.',
                    level: 'Advanced'
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
            <PageHeader title="Artificial Intelligence (CSC261)" path="/BSc.CSIT/Csit4" name="BSc.CSIT" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Artificial Intelligence (CSC261)</h1>
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

export default ArtificialIntelligence;
