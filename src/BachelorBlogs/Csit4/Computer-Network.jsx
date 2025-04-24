import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/courses.css';

const ComputerNetworks = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const courseCategories = [
        {
            id: 'computer-networks',
            title: 'Computer Networks (CSC258)',
            courses: [
                {
                    id: 'Unit1',
                    title: 'Introduction to Computer Network',
                    description: 'Overview of network types, topologies, OSI and TCP/IP models, protocols, and internet.',
                    image: '#',
                    duration: '6 Hrs.',
                    level: 'Beginner'
                },
                {
                    id: 'Unit2',
                    title: 'Physical Layer and Network Media',
                    description: 'Introduction to network devices and transmission media such as Ethernet cables, ISDN.',
                    image: '#',
                    duration: '4 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit3',
                    title: 'Data Link Layer',
                    description: 'Overview of DLL functions, Ethernet standards, flow control, error detection and correction.',
                    image: '#',
                    duration: '8 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit4',
                    title: 'Network Layer',
                    description: 'IPv4/IPv6 addressing, routing protocols like RIP, OSPF, BGP, and ICMP.',
                    image: '#',
                    duration: '10 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit5',
                    title: 'Transport Layer',
                    description: 'Transport protocols, congestion control, traffic shaping algorithms, and socket programming.',
                    image: '#',
                    duration: '6 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit6',
                    title: 'Application Layer',
                    description: 'Introduction to HTTP, DNS, FTP, SFTP, SMTP, IMAP, POP3, and network management.',
                    image: '#',
                    duration: '7 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit7',
                    title: 'Multimedia & Future Networking',
                    description: 'Overview of multimedia streaming protocols, SDN, NFV, and NGN.',
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
            <PageHeader title="Computer Networks (CSC258)" path="/BSc.CSIT/Csit4" name="BSc.CSIT" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Computer Networks (CSC258)</h1>
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

export default ComputerNetworks;
