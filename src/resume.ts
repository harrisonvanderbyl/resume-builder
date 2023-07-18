import { Resume } from "./resume.types";

// icon = fa fa-{icon}
export const skills = {
  Programming: { level: 10, icon: "code", desc: "Writing and debugging code" },
  Math: {
    level: 10,
    image: "https://cdn-icons-png.flaticon.com/128/1828/1828062.png",
    desc: "Mathematical problem solving and analysis",
  },
  "Machine Learning": {
    level: 7,
    image: "https://img.icons8.com/?size=1x&id=62903&format=png",
    desc: "Creating and training machine learning models",
  },
  "C++": {
    level: 7,
    image: "https://img.icons8.com/?size=1x&id=TpULddJc4gTh&format=png",
    desc: "Writing and debugging C++ code",
  },
  CUDA: {
    level: 7,
    image: "https://img.icons8.com/?size=1x&id=63538&format=png",
    desc: "Writing and debugging CUDA C++ code for accelerated computing using NVIDIA GPUs",
  },
  Vulkan: {
    level: 5,
    image: "https://registry.khronos.org/favicon.ico",
    desc: "Writing and debugging Vulkan C++ code for accelerated computing using any GPU",
  },
  HIP: {
    level: 7,
    image: "https://img.icons8.com/?size=1x&id=106755&format=png",
    desc: "Writing and debugging HIP C++ code for accelerated computing using AMD GPUs",
  },
  // machine learning frameworks
  PyTorch: {
    level: 9,
    image: "https://pytorch.org/assets/images/logo-icon.svg",
    desc: "Creating and training machine learning models using PyTorch",
  },
  TensorFlow: {
    level: 5,
    image:
      "https://raw.githubusercontent.com/tensorflow/tfjs-website/master/source/favicon.ico",
    desc: "Creating and training machine learning models using TensorFlow",
  },
  TensorRT: {
    level: 5,
    image: "https://img.icons8.com/?size=1x&id=yqf95864UzeQ&format=png",
    desc: "Creating and training machine learning models using TensorRT",
  },
  ONNX: {
    level: 9,
    image: "https://onnx.ai/images/icon/icon-ONNX-logo.svg",
    desc: "Creating and converting machine learning models using ONNX for interoperability",
  },
  Python: {
    level: 8,
    image: "https://img.icons8.com/?size=1x&id=13441&format=png",
    desc: "Writing and debugging Python code",
  },
  Javascript: {
    level: 10,
    image: "https://img.icons8.com/?size=1x&id=39853&format=png",
    desc: "Writing and debugging JavaScript code",
  },
  Typescript: {
    level: 10,
    image: "https://img.icons8.com/?size=1x&id=vMqgHSToxrJR&format=png",
    desc: "Writing and debugging TypeScript code",
  },
  Node: {
    level: 10,
    image: "https://img.icons8.com/?size=1x&id=FQlr_bFSqEdG&format=png",
    desc: "Writing and debugging Node.js code",
  },
  "C#": {
    level: 6,
    image: "https://img.icons8.com/?size=1x&id=55251&format=png",
    desc: "Writing and debugging C# code",
  },
  "Azure DevOps": {
    level: 7,
    icon: "cloud",
    desc: "Using Azure DevOps for CI/CD and project management",
  },
  Git: { level: 10, icon: "git", desc: "Using Git for version control" },
  GitHub: {
    level: 10,
    icon: "github",
    desc: "Using GitHub for version control",
  },
};

export const resume: Resume<keyof typeof skills> = {
  Age: "24",
  Name: "John Doe",
  Contact: "Example@gmail.com",
  Description: "A person who loves doing things",
  Education: [],
  Skills: skills,
  Experience: [
    {
      company: "Company 1",
      description: "Doing Company stuff",
      endDate: "2021",
      startDate: "2020",
      position: "Junior Software Engineer",
      skills: ["Programming", "Javascript", "Typescript", "Node"],
    },
    {
      company: "Company 2",
      description: "Doing other company stuff",
      endDate: "-",
      startDate: "2021",
      position: "Software Engineer",
      skills: [
        "Programming",
        "Javascript",
        "Typescript",
        "Node",
        "C#",
        "Azure DevOps",
        "Git",
      ],
    },
  ],
  Portfolio: {
    projects: [
      {
        name: "Project example  1",
        description: "Project example  1",
        skills: ["Programming", "C++", "CUDA", "Vulkan", "HIP"],
        image: "https://wiki.rwkv.com/assets/rwkv-avartar-256p-4e6660ec.png",
        url: "https://github.com/example/project",
      },
      {
        name: "Project Example 2",
        description: "A Project",
        skills: ["Programming", "Python", "PyTorch", "TensorFlow", "ONNX"],
        image: "https://wiki.rwkv.com/assets/rwkv-avartar-256p-4e6660ec.png",
        url: "https://github.com/example/project",
      },
      {
        name: "example-Onnx",
        description: "Another example project",
        skills: ["Programming", "Python", "ONNX", "C++"],
        image: "https://wiki.rwkv.com/assets/rwkv-avartar-256p-4e6660ec.png",
        url: "https://github.com/Example/project",
      },
    ],
  },
};
