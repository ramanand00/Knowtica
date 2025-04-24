import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/courses.css';

const ComputerGraphics = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const courseCategories = [
        {
            id: 'frontend',
            title: 'Computer Graphics (CSC209)',
            courses: [
                {
                    id: 'Unit1',
                    title: 'Introduction of Computer Graphics',
                    description: 'Overview of Computer Graphics, Areas of Applications, Graphics Hardware (Display Technology, Architecture of Raster-Scan Displays, Vector Displays), Input Devices, and Graphics Software.',
                    image: '#',
                    duration: '3 Hrs.',
                    level: 'Beginner'
                },
                {
                    id: 'Unit2',
                    title: 'Scan Conversion Algorithm',
                    description: 'Scan Converting a Point and a Straight Line: DDA Line Algorithm, Bresenham’s Line Algorithm; Scan Converting Circle and Ellipse: Mid Point Circle and Ellipse Algorithm; Area Filling: Scan Line Polygon fill Algorithm, Inside-outside Test, Boundary-fill and Flood-fill algorithm.',
                    image: '#',
                    duration: '6 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit3',
                    title: 'Two-Dimensional Geometric Transformations',
                    description: 'Translation, Rotation, Scaling, Reflection, Shearing; Homogeneous Coordinates and 2D Composite Transformations; Clipping: Point, Lines (Cohen Sutherland, Liang-Barsky), Polygon Clipping (Sutherland Hodgeman).',
                    image: '#',
                    duration: '5 Hrs.',
                    level: 'Intermediate'
                },
                {
                    id: 'Unit4',
                    title: 'Three-Dimensional Geometric Transformation',
                    description: 'Translation, Rotation, Scaling, Reflection, Shearing; Three-Dimensional Composite Transformations; Viewing Pipeline, World to Screen Viewing Transformation; Projection Concepts (Orthographic, Parallel, Perspective).',
                    image: '#',
                    duration: '5 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit5',
                    title: '3D Objects Representation',
                    description: 'Representing Surfaces (Polygon Surface, Wireframe Representation, Blobby Objects); Representing Curves (Parametric Cubic Curves, Spline Representation, Cubic Spline Interpolation, Hermite Curves, Bezier and B-spline Curve and Surface); Quadric Surfaces (Sphere and Ellipsoid).',
                    image: '#',
                    duration: '7 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit6',
                    title: 'Solid Modeling',
                    description: 'Sweep, Boundary and Spatial-Partitioning Representation; Binary Space Partition Trees (BSP); Octree Representation.',
                    image: '#',
                    duration: '4 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit7',
                    title: 'Visible Surface Detections',
                    description: 'Image Space and Object Space Techniques; Back Face Detection, Depth Buffer (Z-buffer), A-Buffer and Scan-Line Algorithms; Depth Sorting Method (Painter’s Algorithm); BSP Tree Method, Octree and Ray Tracing.',
                    image: '#',
                    duration: '5 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit8',
                    title: 'Illumination Models and Surface Rendering Techniques',
                    description: 'Basic Illumination Models: Ambient light, Diffuse reflection, Specular reflection, Phong model; Intensity Attenuation and Color Consideration, Transparency, Shadows; Polygon Rendering Methods: Constant intensity shading, Gouraud shading, Phong Shading, Fast Phong Shading.',
                    image: '#',
                    duration: '5 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit9',
                    title: 'Introduction to Virtual Reality',
                    description: 'Concept of Virtual Reality, Components of VR System, Types of VR System, 3D Position Trackers, Navigation and Manipulation Interfaces, Applications of VR.',
                    image: '#',
                    duration: '2 Hrs.',
                    level: 'Advanced'
                },
                {
                    id: 'Unit10',
                    title: 'Introduction to OpenGL',
                    description: 'Introduction, Callback functions, Color commands, Drawing pixels, lines, polygons using OpenGL, Viewing and Lighting.',
                    image: '#',
                    duration: '3 Hrs.',
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
            <PageHeader title="Computer Graphics (CSC209)" path="/BSc.CSIT/Csit3" name="BSc.CSIT" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Computer Graphics (CSC209)</h1>
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

export default ComputerGraphics;
