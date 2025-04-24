import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/courses.css';

const StatisticsI = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const courseCategories = [
        {
            id: 'frontend',
            title: 'Statistics I (STA164)',
            courses: [
                {
                    id: 'Unit1',
                    title: 'Introduction',
                    description: 'Basic concept of statistics; Application of Statistics in the field of Computer Science & Information technology; Scales of measurement; Variables; Types of Data; Notion of a statistical population.',
                    image: '#',
                    duration: '4 Hrs.',
                    level: 'Beginner'
                },
                {
                    id: 'Unit2',
                    title: 'Descriptive Statistics',
                    description: 'Measures of central tendency; Measures of dispersion; Measures of skewness; Measures of kurtosis; Moments; Steam and leaf display; five number summary; box plot. Problems and illustrative examples related to computer Science and IT.',
                    image: '#',
                    duration: '6 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit3',
                    title: 'Introduction to Probability',
                    description: 'Concepts of probability; Definitions of probability; Laws of probability; Bayes theorem; prior and posterior probabilities. Problems and illustrative examples related to computer Science and IT.',
                    image: '#',
                    duration: '8 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit4',
                    title: 'Sampling',
                    description: 'Definitions of population; sample survey vs. census survey; sampling error and non-sampling error; Types of sampling.',
                    image: '#',
                    duration: '3 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit5',
                    title: 'Random Variables and Mathematical Expectation',
                    description: 'Concept of a random variable; Types of random variables; Probability distribution of a random variable; Mathematical expectation of a random variable; Addition and multiplicative theorems of expectation. Problems and illustrative examples related to computer Science and IT.',
                    image: '#',
                    duration: '5 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit6',
                    title: 'Probability Distributions',
                    description: 'Probability distribution function, Joint probability distribution of two random variables; Discrete distributions: Bernoulli trial, Binomial and Poisson distributions; Continuous distribution: Normal distributions; Standardization of normal distribution; Normal distribution as an approximation of Binomial and Poisson distribution; Exponential, Gamma distribution. Problems and illustrative examples related to computer Science and IT.',
                    image: '#',
                    duration: '12 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit7',
                    title: 'Correlation and Linear Regression',
                    description: 'Bivariate data; Bivariate frequency distribution; Correlation between two variables; Karl Pearson’s coefficient of correlation(r); Spearman’s rank correlation; Regression Analysis: Fitting of lines of regression by the least squares method; coefficient of determination.',
                    image: '#',
                    duration: '7 Hrs.',
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
            <PageHeader title="Statistics I (STA164)" path="/BSc.CSIT/Csit2" name="BSc.CSIT" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Statistics I (STA164)</h1>
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

export default StatisticsI;
