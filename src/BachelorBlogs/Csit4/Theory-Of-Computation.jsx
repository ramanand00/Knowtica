import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/courses.css';

const TheoryOfComputation = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const courseCategories = [
        {
            id: 'theory-of-computation',
            title: 'Theory of Computation (CSC257)',
            courses: [
                {
                    id: 'Unit1',
                    title: 'Basic Foundations',
                    description: 'Review of Set Theory, Logic, Functions, Proofs, and basic concepts of Automata Theory.',
                    image: '#',
                    duration: '3 Hrs.',
                    level: 'Beginner'
                },
                {
                    id: 'Unit2',
                    title: 'Introduction to Finite Automata',
                    description: 'Introduction to DFA, NFA, Epsilon-NFA, Finite State Machines, Moore and Mealy machines.',
                    image: '#',
                    duration: '8 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit3',
                    title: 'Regular Expressions',
                    description: 'Regular Expressions, Regular Operators, Pumping Lemma, Closure Properties, Minimization of FSMs.',
                    image: '#',
                    duration: '6 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit4',
                    title: 'Context Free Grammar',
                    description: 'CFG, Derivations, Parse Trees, Ambiguous Grammars, Simplification, Chomsky Normal Form (CNF), Greibach Normal Form (GNF).',
                    image: '#',
                    duration: '9 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit5',
                    title: 'Push Down Automata',
                    description: 'Introduction to PDA, Deterministic and Non-Deterministic PDA, Construction and Conversion of PDA, PDA Acceptance.',
                    image: '#',
                    duration: '7 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit6',
                    title: 'Turing Machines',
                    description: 'Introduction to TM, Universal TM, Multitape TM, Non-Deterministic TM, Encoding of Turing Machines.',
                    image: '#',
                    duration: '10 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit7',
                    title: 'Undecidability and Intractability',
                    description: 'Computational Complexity, Time and Space Complexity, Undecidable Problems like Halting Problem.',
                    image: '#',
                    duration: '5 Hrs.',
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
            <PageHeader title="Theory of Computation (CSC257)" path="/BSc.CSIT/Csit4" name="BSc.CSIT" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Theory of Computation (CSC257)</h1>
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

export default TheoryOfComputation;
