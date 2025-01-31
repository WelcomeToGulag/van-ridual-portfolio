const logotext = "Van Chester";
const meta = {
    title: "Van chester",
    description: "I’m John Doe data scientist _ Full stack developer, currently working in Berlin",
};

const introdata = {
    title: "I’m Van Chester",
    animated: {
        first: "Full-stack developer",
        second: "UI / UX designer",
        third: "Web and app developer",
    },
    description: "I specialize in designing intuitive and engaging user experiences that prioritize functionality and ease of use. With a keen eye for detail and a passion for creative problem-solving, I aim to craft designs that not only look great but also work seamlessly for users. Whether it’s building an interface from scratch or refining an existing one, I focus on creating products that offer a smooth, enjoyable experience.",
    your_img_url: require('./assets/images/van.jpg'), // Local image
};

const dataabout = {
    title: "About Myself",
    aboutme: "I’m a programmer with a passion for problem-solving and continuous learning. I enjoy taking on new challenges and building solutions that make an impact. Always eager to expand my skills, I love collaborating with others and exploring new technologies. Outside of coding, I enjoy",
};

const worktimeline = [
    {
        jobtitle: "Designer of the Week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of the Week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of the Week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [
    {
        name: "Flutter",
        value: 85,
    },
    {
        name: "ReactJs",
        value: 80,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "HTML",
        value: 90,
    },
    {
        name: "C#",
        value: 75,
    },
];

const services = [
    {
        title: "UI & UX Design",
        description: "I specialize in creating user-friendly and visually appealing designs that offer seamless experiences. My focus is on crafting intuitive interfaces that enhance user interaction and engagement.",
    },
    {
        title: "Mobile Apps",
        description: "I develop mobile applications with a strong emphasis on functionality and performance. I aim to create responsive and reliable apps that provide value and meet users' needs.",
    },
    {
        title: "Web Design",
        description: "I design responsive and modern websites that are both aesthetically pleasing and easy to navigate. My goal is to create web experiences that look great and perform well across all devices.",
    },
    {
        title: "Full Stack Development",
        description: "With expertise in both front-end and back-end development, I build end-to-end solutions that are scalable, efficient, and tailored to meet specific business goals.",
    },
];

const dataportfolio = [
    {
        img: require('./assets/images/1.png'),
        description: "Canteen food ordering.",
        link: "#",
        width: 400,  // Optional: Set the desired width
        height: 300, // Optional: Set the desired height
    },
    {
        img: require('./assets/images/2.png'),
        description: "Canteen Ordering.",
        link: "#",
        width: 400,
        height: 300,
    },
    {
        img: require('./assets/images/t1.png'),
        description: "Python Translation.",
        link: "#",
        width: 400,
        height: 300,
    },
    {
        img: require('./assets/images/v1.png'),
        description: "Voting System.",
        link: "#",
        width: 400,
        height: 300,
    },
    {
        img: require('./assets/images/v2.png'),
        description: "Voting Login.",
        link: "#",
        width: 400,
        height: 300,
    },
    {
        img: require('./assets/images/v3.png'),
        description: "Voting Personal Information.",
        link: "#",
        width: 400,
        height: 300,
    },
    {
        img: require('./assets/images/v4.png'),
        description: "Canteen Web",
        link: "#",
        width: 400,
        height: 300,
    },
];


const contactConfig = {
    YOUR_EMAIL: "vridual11@gmail.com",
    YOUR_FONE: "+63 9364716540",
    description: "Feel free to reach out! I'm always open to discussing new opportunities, ideas, or collaborations. Whether you have a question or just want to connect, don’t hesitate to get in touch. I look forward to hearing from you! ",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    
    facebook: "https://facebook.com/van.chester.ridual.2024",
    linkedin: "https://www.linkedin.com/in/van-chester-ridual-a6bb16281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://twitter.chttps://x.com/IamChestersy?t=PSP22u8Y6ae1v5F3199GIg&s=09om",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
