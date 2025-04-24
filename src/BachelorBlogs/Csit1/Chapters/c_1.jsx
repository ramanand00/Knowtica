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
            title: 'Hello ITians... Welcome to BSc.CSIT',
            courses: [
                {
                    id: 'Cahpter1',
                    title: 'Problem Solving with Computer',
                    description: 'Description',
                    image: '#',
                    duration: '#',
                    level: '#'
                },
                {
                  id: 'Cahpter2',
                  title: 'Element of C',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
                },
                {
                  id: 'Cahpter3',
                  title: 'Input and Output',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
                },
                {
                  id: 'Cahpter4',
                  title: 'Operators and Expressions',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
                },
                {
                  id: 'Cahpter5',
                  title: 'Control Statements',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
                },
                {
                  id: 'Cahpter6',
                  title: 'Arrays',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
                },
                {
                  id: 'Cahpter7',
                  title: 'Functions',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
                },
                {
                  id: 'Cahpter8',
                  title: 'Structure and Union',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
                },
                {
                  id: 'Cahpter9',
                  title: 'Pointers',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
                },
                {
                  id: 'Cahpter10',
                  title: 'File Handling',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
                },
                {
                  id: 'Cahpter11',
                  title: 'Introduction to Graphics',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
                },
                {
                  id: 'model',
                  title: 'Model Question Paper',
                  description: 'Description',
                  image: '#',
                  duration: '#',
                  level: '#'
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
            <PageHeader title="BSc.CSIT First Semister" path="/BSc.CSIT/Csit1" name="BSc.CSIT" />
            <div>
                
            </div>
            <Footer />
            <BackToTop />
        </>
    );
};

export default Csit; 