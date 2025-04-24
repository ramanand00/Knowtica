import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/courses.css';

const DataStructuresAndAlgorithms = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const courseCategories = [
        {
            id: 'frontend',
            title: 'Data Structures and Algorithms (CSC206)',
            courses: [
                {
                    id: 'Unit1',
                    title: 'Introduction to Data Structures & Algorithms',
                    description: 'Data types, Data structure and Abstract date type; Dynamic memory allocation in C; Introduction to Algorithms; Asymptotic notations and common functions.',
                    image: '#',
                    duration: '4 Hrs.',
                    level: 'Beginner'
                },
                {
                    id: 'Unit2',
                    title: 'Stack',
                    description: 'Basic Concept of Stack, Stack as an ADT, Stack Operations, Stack Applications; Conversion from infix to postfix/prefix expression, Evaluation of postfix/prefix expressions.',
                    image: '#',
                    duration: '4 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit3',
                    title: 'Queue',
                    description: 'Basic Concept of Queue, Queue as an ADT, Primitive Operations in Queue; Linear Queue, Circular Queue, Priority Queue, Queue Applications.',
                    image: '#',
                    duration: '4 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit4',
                    title: 'Recursion',
                    description: 'Principle of Recursion, Comparison between Recursion and Iteration, Tail Recursion; Factorial, Fibonacci Sequence, GCD, Tower of Hanoi(TOH); Applications and Efficiency of Recursion.',
                    image: '#',
                    duration: '3 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit5',
                    title: 'Lists',
                    description: 'Basic Concept, List and ADT, Array Implementation of Lists, Linked List; Types of Linked List: Singly Linked List, Doubly Linked List, Circular Linked List; Basic operations in Linked List: Node Creation, Node Insertion and Deletion from Beginning, End and Specified Position.',
                    image: '#',
                    duration: '8 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit6',
                    title: 'Sorting',
                    description: 'Introduction and Types of sorting: Internal and External sort; Comparison Sorting Algorithms: Bubble, Selection and Insertion Sort, Shell Sort; Divide and Conquer Sorting: Merge, Quick and Heap Sort; Efficiency of Sorting Algorithms.',
                    image: '#',
                    duration: '8 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit7',
                    title: 'Searching and Hashing',
                    description: 'Introduction to Searching, Search Algorithms: Sequential Search, Binary Search; Efficiency of Search Algorithms; Hashing: Hash Function and Hash Tables, Collision Resolution Techniques.',
                    image: '#',
                    duration: '6 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit8',
                    title: 'Trees and Graphs',
                    description: 'Concept and Definitions, Basic Operations in Binary Tree, Tree Height, Level and Depth; Binary Search Tree, Insertion, Deletion, Traversals, Search in BST; AVL tree and Balancing algorithm, Applications of Trees; Definition and Representation of Graphs, Graph Traversal, Minimum Spanning Trees: Kruskal and Prims Algorithm; Shortest Path Algorithms: Dijkstra Algorithm.',
                    image: '#',
                    duration: '8 Hrs.',
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
            <PageHeader title="Data Structures and Algorithms (CSC206)" path="/BSc.CSIT/Csit3" name="BSc.CSIT" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Data Structures and Algorithms (CSC206)</h1>
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

export default DataStructuresAndAlgorithms;
