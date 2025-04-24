import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/courses.css';

const StatisticsII = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const courseCategories = [
        {
            id: 'statistics-ii',
            title: 'Statistics II (STA210)',
            courses: [
                {
                    id: 'Unit1',
                    title: 'Sampling Distribution and Estimation',
                    description: 'Sampling distribution of mean and proportion, Central Limit Theorem, Estimation Methods, Sample size determination, and its relationship with desired error levels.',
                    image: '#',
                    duration: '6 Hrs.',
                    level: 'Beginner'
                },
                {
                    id: 'Unit2',
                    title: 'Testing of Hypothesis',
                    description: 'Statistical hypotheses, Power of the test, p-value concept, one sample tests for mean, proportion, paired sample t-test, confidence intervals.',
                    image: '#',
                    duration: '8 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit3',
                    title: 'Non-Parametric Test',
                    description: 'Parametric vs non-parametric test, needs, one-sample test (Run test, Binomial test, Kolmogorov–Smirnov test), paired-sample tests, Kruskal Wallis test.',
                    image: '#',
                    duration: '8 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit4',
                    title: 'Multiple Correlation and Regression',
                    description: 'Multiple and partial correlation, multiple linear regression, hypothesis testing of multiple regression, test of significance of regression coefficients.',
                    image: '#',
                    duration: '6 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit5',
                    title: 'Design of Experiment',
                    description: 'Experimental design, CRD, RBD, Latin Square Design, ANOVA tables, efficiency, estimation of missing values, and statistical analysis.',
                    image: '#',
                    duration: '10 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit6',
                    title: 'Stochastic Process',
                    description: 'Markov Process, Poisson process, Simulation of stochastic processes, Queuing systems (Little’s law, M/M/1 system), performance evaluation.',
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
            <PageHeader title="Statistics II (STA210)" path="/BSc.CSIT/Csit3" name="BSc.CSIT" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Statistics II (STA210)</h1>
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

export default StatisticsII;
