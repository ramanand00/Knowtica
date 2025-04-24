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
            title: 'Object Oriented Programming (CSC161)',
            courses: [
                {
                    id: 'Unit1',
                    title: 'Introduction to Object Oriented Programming',
                    description: 'Overview of structured programming approach, Object oriented programming approach, Characteristics of object oriented languages.',
                    image: '#',
                    duration: '3 Hrs.',
                    level: 'Beginner'
                },
                {
                    id: 'Unit2',
                    title: 'Basics of C++ Programming',
                    description: 'C++ Program Structure, Character Set and Tokens, Data Type, Type Conversion, Preprocessor Directives, Namespace, Input/Output Streams and Manipulators, Dynamic Memory Allocation with new and delete, Control Statements.',
                    image: '#',
                    duration: '5 Hrs.',
                    level: 'Beginner'
                },
                {
                    id: 'Unit3',
                    title: 'Classes & Objects',
                    description: 'A Simple Class and Object, Accessing members of class, Initialization of class objects, Constructors, Destructors, Objects as Function Arguments, Static members, Member functions defined outside the class.',
                    image: '#',
                    duration: '8 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit4',
                    title: 'Operator Overloading',
                    description: 'Fundamentals of operator overloading, Restrictions, Unary and binary operator overloading, Data Conversion between types.',
                    image: '#',
                    duration: '7 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit5',
                    title: 'Inheritance',
                    description: 'Introduction to inheritance, Derived and Base Class, Types of inheritance, Constructor and Destructor in derived classes, Aggregation.',
                    image: '#',
                    duration: '7 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit6',
                    title: 'Virtual Function, Polymorphism, and Miscellaneous C++ Features',
                    description: 'Concept of Virtual functions, Late Binding, Abstract class, Pure virtual functions, Polymorphism, Friend function, Static function, This pointer.',
                    image: '#',
                    duration: '5 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit7',
                    title: 'Function Templates and Exception Handling',
                    description: 'Function templates, Class templates, Exception Handling (Try, throw, and catch), Use of exceptional handling in C++.',
                    image: '#',
                    duration: '4 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit8',
                    title: 'File Handling',
                    description: 'Stream Class Hierarchy, Formatted/Unformatted Input/Output, File Input/Output, Opening/Closing Files, File Access Pointers, Sequential and Random Access to File.',
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
            <PageHeader title="Object Oriented Programming (CSC161)" path="/BSc.CSIT/Csit2" name="BSc.CSIT" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Object Oriented Programming (CSC161)</h1>
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
