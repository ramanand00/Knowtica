import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/courses.css';

const DiscreteStructures = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const courseCategories = [
        {
            id: 'discrete-structures',
            title: 'Hello ITians... Welcome to BSc.CSIT - Discrete Structures',
            courses: [
                {
                    id: 'Unit1',
                    title: 'Basic Discrete Structures (7 Hrs.)',
                    description: 'Sets, Functions, Sequences and Summations',
                    image: '#',
                    duration: '7 Hrs.',
                    level: 'Beginner'
                },
                {
                    id: 'Unit2',
                    title: 'Integers and Matrices (6 Hrs.)',
                    description: 'Number Theory, Euclidean Algorithm, Boolean Matrices',
                    image: '#',
                    duration: '6 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit3',
                    title: 'Logic and Proof Methods (6 Hrs.)',
                    description: 'Propositional Logic, Proof Techniques',
                    image: '#',
                    duration: '6 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit4',
                    title: 'Induction and Recursion (5 Hrs.)',
                    description: 'Mathematical Induction, Recursive Algorithms',
                    image: '#',
                    duration: '5 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit5',
                    title: 'Counting and Discrete Probability (9 Hrs.)',
                    description: 'Counting Techniques, Probability, Recurrence Relations',
                    image: '#',
                    duration: '9 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit6',
                    title: 'Relations and Graphs (12 Hrs.)',
                    description: 'Relations, Graph Theory, Trees, Network Flows',
                    image: '#',
                    duration: '12 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'model',
                    title: 'Model Question Paper',
                    description: 'Practice model questions based on the syllabus.',
                    image: '#',
                    duration: 'Variable',
                    level: 'All Levels'
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
            <PageHeader title="BSc.CSIT Second Semester - Discrete Structures" path="/BSc.CSIT/DiscreteStructures" name="BSc.CSIT" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Course Units</h1>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search units..."
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
                                                    View Unit
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

export default DiscreteStructures;