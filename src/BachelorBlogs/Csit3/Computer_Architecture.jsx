import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/courses.css';

const ComputerArchitecture = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const courseCategories = [
        {
            id: 'frontend',
            title: 'Computer Architecture (CSC208)',
            courses: [
                {
                    id: 'Unit1',
                    title: 'Data Representation',
                    description: 'Binary Representation, BCD, Alphanumeric Representation, Complements, Fixed Point representation, Representing Negative Numbers, Floating Point Representation, Arithmetic with Complements, Overflow, Detecting Overflow; Other Binary Codes: Gray Code, self Complementing Code, Weighted Code, Excess-3 Code, EBCDIC; Error Detection Codes: Parity Bit, Odd Parity, Even parity, Parity Generator & Checker.',
                    image: '#',
                    duration: '4 Hrs.',
                    level: 'Beginner'
                },
                {
                    id: 'Unit2',
                    title: 'Register Transfer and Microoperations',
                    description: 'Microoperation, Register Transfer Language, Register Transfer, Control Function; Arithmetic Microoperations: Binary Adder, Binary Adder-subtractor, Binary Incrementer, Arithmetic Circuit; Logic Microoperations, Hardware Implementation, Applications of Logic Microoperations; Shift Microoperations: Logical Shift, Circular shift, Arithmetic Shift, Hardware Implementation of Shifter.',
                    image: '#',
                    duration: '5 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit3',
                    title: 'Basic Computer Organization and Design',
                    description: 'Instruction Code, Operation Code, Stored Program Concept; Registers and memory of Basic Computer, Common Bus System for Basic Computer; Instruction Format, Instruction Set Completeness, Control Unit of Basic Computer, Control Timing Signals; Instruction Cycle of Basic computer, Determining Type of Instruction, Memory Reference Instructions, Input-Output Instructions, Program Interrupt & Interrupt Cycle; Description and Flowchart of Basic Computer.',
                    image: '#',
                    duration: '8 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit4',
                    title: 'Microprogrammed Control',
                    description: 'Control Word, Microprogram, Control Memory, Control Address Register, Sequencer; Address Sequencing, Conditional Branch, Mapping of Instructions, Subroutines, Microinstruction Format, Symbolic Microinstructions; Design of Control Unit.',
                    image: '#',
                    duration: '4 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit5',
                    title: 'Central Processing Unit',
                    description: 'Major Components of CPU, CPU Organization; Instruction Formats, Addressing Modes, Data Transfer and manipulation, Program Control, Subroutine Call and Return, Types of Interrupt; RISC vs CISC, Pros and Cons of RISC and CISC, Overlapped Register Windows.',
                    image: '#',
                    duration: '4 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit6',
                    title: 'Pipelining',
                    description: 'Parallel Processing, Multiple Functional Units, Flynn’s Classification; Pipelining: Concept and Demonstration with Example, Speedup Equation, Floating Point addition and Subtraction with Pipelining; Instruction Level Pipelining: Instruction Cycle, Three & Four-Segment Instruction Pipeline, Pipeline Conflicts and Solutions; Vector Processing, Applications, Vector Operations, Matrix Multiplication.',
                    image: '#',
                    duration: '6 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit7',
                    title: 'Computer Arithmetic',
                    description: 'Addition and Subtraction with Signed Magnitude Data, Addition and Subtraction with Signed 2’s Complement Data; Multiplication of Signed Magnitude Data, Booth Multiplication, Division of Signed magnitude Data, Divide Overflow.',
                    image: '#',
                    duration: '6 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit8',
                    title: 'Input Output Organization',
                    description: 'Input-Output Interface: I/O Bus and Interface Modules, I/O vs. Memory Bus, Isolated vs. Memory-Mapped I/O; Asynchronous Data Transfer: Strobe, Handshaking; Modes of Transfer: Programmed I/O, Interrupt-Initiated I/O, Direct memory Access; Priority Interrupt: Polling, Daisy-Chaining, Parallel Priority Interrupt; Direct Memory Access, Input-Output Processor, DMA vs. IOP.',
                    image: '#',
                    duration: '4 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit9',
                    title: 'Memory Organization',
                    description: 'Memory Hierarchy, Main Memory, RAM and ROM Chips, Memory address Map, Memory Connection to CPU, Auxiliary Memory (magnetic Disk, Magnetic Tape); Associative Memory: Hardware Organization, Match Logic, Read Operation, Write Operation; Cache Memory: Locality of Reference, Hit & Miss Ratio, Mapping, Write Policies.',
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
            <PageHeader title="Computer Architecture (CSC208)" path="/BSc.CSIT/Csit3" name="BSc.CSIT" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Computer Architecture (CSC208)</h1>
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

export default ComputerArchitecture;
