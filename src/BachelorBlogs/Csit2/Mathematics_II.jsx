import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/courses.css';

const MathematicsII = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const courseCategories = [
        {
            id: 'frontend',
            title: 'Mathematics II (MTH163)',
            courses: [
                {
                    id: 'Unit1',
                    title: 'Linear Equations in Linear Algebra',
                    description: 'System of linear equations, Row reduction and Echelon forms, Vector equations, The matrix equations Ax = b, Applications of linear system, Linear independence.',
                    image: '#',
                    duration: '5 Hrs.',
                    level: 'Beginner'
                },
                {
                    id: 'Unit2',
                    title: 'Transformation',
                    description: 'Introduction to linear transformations, the matrix of a linear Transformation, Linear models in business, science, and engineering.',
                    image: '#',
                    duration: '4 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit3',
                    title: 'Matrix Algebra',
                    description: 'Matrix operations, The inverse of a matrix, Characterizations of invertible matrices, Partitioned matrices, Matrix factorization, The Leontief input-output model, Subspace of Rn, Dimension and rank.',
                    image: '#',
                    duration: '5 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit4',
                    title: 'Determinants',
                    description: 'Introduction, Properties, Cramer’s rule, Volume and linear transformations.',
                    image: '#',
                    duration: '4 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit5',
                    title: 'Vector Spaces',
                    description: 'Vector spaces and subspaces, Null spaces, Column spaces, and Linear transformations, Linearly independent sets: Bases, Coordinate systems.',
                    image: '#',
                    duration: '5 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit6',
                    title: 'Vector Space Continued',
                    description: 'Dimension of vector space and Rank, Change of basis, Applications to difference equations, Applications to Markov Chains.',
                    image: '#',
                    duration: '4 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit7',
                    title: 'Eigenvalues and Eigen Vectors',
                    description: 'Eigenvectors and Eigenvalues, The characteristic equations, Diagonalization, Eigenvectors and linear transformations, Complex eigenvalues, Discrete dynamical systems, Applications to differential equations.',
                    image: '#',
                    duration: '5 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit8',
                    title: 'Orthogonality and Least Squares',
                    description: 'Inner product, Length, and orthogonality, Orthogonal sets, Orthogonal projections, The Gram-Schmidt process, Least squares problems, Application to linear models, Inner product spaces, Applications of inner product spaces.',
                    image: '#',
                    duration: '5 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit9',
                    title: 'Groups and Subgroups',
                    description: 'Binary Operations, Groups, Subgroups, Cyclic Groups.',
                    image: '#',
                    duration: '5 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit10',
                    title: 'Rings and Fields',
                    description: 'Rings and Fields, Integral domains.',
                    image: '#',
                    duration: '4 Hrs.',
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
            <PageHeader title="Mathematics II (MTH163)" path="/BSc.CSIT/Csit2" name="BSc.CSIT" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Mathematics II (MTH163)</h1>
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

export default MathematicsII;
