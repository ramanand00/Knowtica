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
            title: 'Microprocessor (CSC162)',
            courses: [
                {
                    id: 'Unit1',
                    title: 'Introduction to Microprocessor',
                    description: 'Introduction to Microprocessor, Components of a Microprocessor: Registers, ALU and control & timing, System bus (data, address and control bus), Microprocessor systems with bus organization.',
                    image: '#',
                    duration: '4 Hrs.',
                    level: 'Beginner'
                },
                {
                    id: 'Unit2',
                    title: 'Basic Architecture',
                    description: 'Microprocessor Architecture and Operations, Memory, I/O devices, Memory and I/O operations, 8085 Microprocessor Architecture, Address, Data And Control Buses, 8085 Pin Functions, Demultiplexing of Buses, Generation Of Control Signals.',
                    image: '#',
                    duration: '7 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit3',
                    title: 'Instruction Cycle',
                    description: 'Fetch Operation and Timing Diagram; Execute Operation and Timing Diagram, Instruction Cycle, Machine Cycle, T-States, Memory Interfacing.',
                    image: '#',
                    duration: '3 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit4',
                    title: 'Assembly Language Programming',
                    description: 'Assembly instruction format, Instruction Types, Mnemonics, Operands, Macro assemblers, Linking, Assembler directives, Addressing Modes, Simple sequence programs, Flags, Branch, Jumps, While-Do, Repeat-Until, If-Then-Else and Multiple If-then Programs, Debugging.',
                    image: '#',
                    duration: '10 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit5',
                    title: 'Basic I/O, Memory R/W and Interrupt Operations',
                    description: 'Memory Read, Memory Write, I/O Read, I/O Write, Direct Memory Access, Interrupt, Types, Interrupt Masking.',
                    image: '#',
                    duration: '6 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit6',
                    title: 'Input/ Output Interfaces',
                    description: 'Interfacing Concepts, Ports, Interfacing Of I/O Devices, Interrupts In 8085, Programmable Interrupt Controller 8259A, Programmable Peripheral Interface 8255A.',
                    image: '#',
                    duration: '6 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit7',
                    title: 'Advanced Microprocessors',
                    description: '8086: logical block diagram and segments, 80286: Architecture, Registers, Privilege levels, descriptor cache, Memory access in GDT and LDT, multitasking, addressing modes, flag register 80386: Architecture, Register organization, Memory access in protected mode, Paging.',
                    image: '#',
                    duration: '9 Hrs.',
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
            <PageHeader title="Microprocessor (CSC162)" path="/BSc.CSIT/Csit2" name="BSc.CSIT" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Microprocessor (CSC162)</h1>
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
