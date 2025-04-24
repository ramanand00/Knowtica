import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/courses.css';

const NumericalMethod = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const courseCategories = [
        {
            id: 'frontend',
            title: 'Numerical Method (CSC207)',
            courses: [
                {
                    id: 'Unit1',
                    title: 'Solution of Nonlinear Equations',
                    description: 'Errors in Numerical Calculations, Sources of Errors, Propagation of Errors, Review of Taylor\'s Theorem; Solving Non-linear Equations by Trial and Error method, Half-Interval method and Convergence, Newton\'s method and Convergence, Secant method and Convergence, Fixed point iteration and its convergence, Newton\'s method for calculating multiple roots, Horner\'s method.',
                    image: '#',
                    duration: '8 Hrs.',
                    level: 'Beginner'
                },
                {
                    id: 'Unit2',
                    title: 'Interpolation and Regression',
                    description: 'Interpolation vs Extrapolation, Lagrange\'s Interpolation, Newton\'s Interpolation using divided differences, forward differences and backward differences, Cubic spline interpolation; Regression vs Interpolation, Least squares method, Linear Regression, Non-linear Regression by fitting Exponential and Polynomial.',
                    image: '#',
                    duration: '8 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit3',
                    title: 'Numerical Differentiation and Integration',
                    description: 'Differentiating Continuous Functions (Two-Point and Three-Point Formula), Differentiating Tabulated Functions by using Newton’s Differences, Maxima and minima of Tabulated Functions; Newton-Cote\'s Quadrature Formulas, Trapezoidal rule, Multi-Segment Trapezoidal rule, Simpson\'s 1/3 rule, Multi-Segment Simpson\'s 1/3 rule, Simpson\'s 3/8 rule, Multi-Segment Simpson\'s 3/8 rule, Gaussian integration algorithm, Romberg integration.',
                    image: '#',
                    duration: '8 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit4',
                    title: 'Solving System of Linear Equations',
                    description: 'Review of the existence of solutions and properties of matrices, Gaussian elimination method, pivoting, Gauss-Jordan method, Inverse of matrix using Gauss-Jordan method; Matrix factorization and Solving System of Linear Equations by using Dolittle and Cholesky\'s algorithm; Iterative Solutions of System of Linear Equations, Jacobi Iteration Method, Gauss-Seidal Method; Eigen values and eigen vectors problems, Solving eigen value problems using power method.',
                    image: '#',
                    duration: '8 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit5',
                    title: 'Solution of Ordinary Differential Equations',
                    description: 'Review of differential equations, Initial value problem, Taylor series method, Picard\'s method, Euler\'s method and its accuracy, Heun\'s method, Runge-Kutta methods; Solving System of ordinary differential equations, Solution of the higher order equations, Boundary value problems, Shooting method and its algorithm.',
                    image: '#',
                    duration: '8 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit6',
                    title: 'Solution of Partial Differential Equations',
                    description: 'Review of partial differential equations, Classification of partial differential equation, Deriving difference equations, Laplacian equation and Poisson\'s equation, engineering examples.',
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
            <PageHeader title="Numerical Method (CSC207)" path="/BSc.CSIT/Csit3" name="BSc.CSIT" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Numerical Method (CSC207)</h1>
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

export default NumericalMethod;
