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
            id: 'physics',
            title: 'BSc.CSIT First Semester - Physics',
            courses: [
                {
                    id: 'Unit1',
                    title: 'Unit 1: Rotational Dynamics and Oscillatory Motion',
                    description: 'Covers torque, angular momentum, SHM, damped and forced oscillations.',
                    image: '#',
                    duration: '3 hrs/week',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit2',
                    title: 'Unit 2: Electric and Magnetic Field',
                    description: 'Electric fields, Gauss’s law, magnetic forces, Ampere’s law and applications.',
                    image: '#',
                    duration: '3 hrs/week',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit3',
                    title: 'Unit 3: Fundamentals of Atomic Theory',
                    description: 'Bohr’s model, atomic spectra, de Broglie hypothesis and Heisenberg’s principle.',
                    image: '#',
                    duration: '2 hrs/week',
                    level: 'Advanced'
                },
                {
                    id: 'Unit4',
                    title: 'Unit 4: Methods of Quantum Mechanics',
                    description: 'Wave functions, Schrödinger equation and particle in a box.',
                    image: '#',
                    duration: '2 hrs/week',
                    level: 'Advanced'
                },
                {
                    id: 'Unit5',
                    title: 'Unit 5: Fundamentals of Solid State Physics',
                    description: 'Crystal structures, energy bands, conductors, semiconductors, insulators.',
                    image: '#',
                    duration: '2 hrs/week',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit6',
                    title: 'Unit 6: Semiconductor and Semiconductor Devices',
                    description: 'PN junction, diodes, transistors, logic gates and applications.',
                    image: '#',
                    duration: '3 hrs/week',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit7',
                    title: 'Unit 7: Universal Gates and Physics of Integrated Circuits',
                    description: 'Basic and universal gates, IC technology, and logic families.',
                    image: '#',
                    duration: '1.5 hrs/week',
                    level: 'Beginner'
                },
                {
                    id: 'model',
                    title: 'Model Question Paper',
                    description: 'Includes sample questions and marking scheme.',
                    image: '#',
                    duration: 'N/A',
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
            <PageHeader title="BSc.CSIT First Semester - Physics" path="/BSc.CSIT/Csit1" name="BSc.CSIT" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Physics Units</h1>
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
                                                    <span className="duration">Credit Hour: {course.duration}</span>
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

export default Csit;
