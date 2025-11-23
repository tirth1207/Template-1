"use client"
import { cn } from '@/lib/utils'
import { FileBracesCorner, FolderUp, House, Server, ShieldCheck } from 'lucide-react'
import React from 'react'
import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "motion/react"
import { DottedGlowBackground } from './ui/dotted-glow-background'
import Logo from './icon'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function Bento() {
  return (
    <div className='max-w-5xl mx-auto grid md:grid-cols-2 mx-4 gap-4 my-8'>
        <Card title="Notely for android" desc="Get Notely on your android device.">
            <One />
        </Card>
        <Card title="Notely for IOS" desc="Get Notely on your IOS device.">
            <Two />
        </Card>
        <Card title='Notely for Window/Linux' desc='Get Notely for your desktop device.' className="overflow-visible">
            <Three />
        </Card>
        <Card title='Notely for Window/Linux' desc='Get Notely for your desktop device.' className="overflow-visible">
            <Four />
        </Card>
    </div>
  )
}


function One({className}:{className?:string}) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,       // animate only once
        amount: 0.5       // trigger when 30% visible
    })
    return(
        <motion.div className={cn('relative flex items-center justify-center w-full overflow-hidden', className)}
            ref={ref}
            initial={{ opacity: 0,x:0,y:50, scale: 0.8 }}
            animate={isInView ? { opacity: 1,x:0,y:0, scale: 1 }: {}}
            transition={{ duration: 0.5 }}
        >
            <div className='flex items-center justify-center gap-4 overflow-visible h-30'>
                {/* left - out of focus */}
                <div className='w-24 h-20 rounded-lg bg-white opacity-80 blur-[2px] transform scale-95 -translate-y-1 transition-all' />
                {/* middle - focused */}
                <div className='w-fit h-20 flex flex-rows items-center justify-center p-6 rounded-lg bg-white shadow-lg ring-1 ring-gray-200 z-10 transform scale-100 transition-all gap-6'>
                    <House />
                    <Server />
                    <ShieldCheck />
                    <button className='bg-black w-1/2 text-white px-4 py-2 rounded-lg text-sm font-medium transition'>Get App</button>
                </div>
                {/* right - out of focus */}
                <div className='w-24 h-20 rounded-lg bg-white opacity-80 blur-[2px] transform scale-95 -translate-y-1 transition-all' />
            </div>
        </motion.div>
    )
}

function Two({ className }: { className?: string }) {

    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,       // animate only once
        amount: 0.3       // trigger when 30% visible
    })

    return (
        <motion.div
            ref={ref}
            className={cn('relative flex items-center justify-center w-full overflow-hidden shadow-lg mt-32', className)}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
        >
            <div className='flex w-full flex-col items-center justify-center gap-2'>

                {/* BOX 1 */}
                <motion.div
                    className='w-2/3 h-20 rounded-lg bg-white p-4 flex items-center gap-4'
                    initial={{ y: 70, opacity: 0, scale: 0.9 }}
                    animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                    <div className='bg-neutral-600/50 h-16 w-16 rounded-sm flex items-center justify-center'>
                        <FileBracesCorner className='text-white' />
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-medium text-sm'>Notely for IOS</p>
                        <p className='text-xs text-gray-500'>Download Notely for your IOS device.</p>
                    </div>
                </motion.div>

                {/* BOX 2 */}
                <motion.div
                    className='w-2/3 h-20 rounded-lg bg-white p-4 flex items-center gap-4'
                    initial={{ y: 80, opacity: 0, scale: 0.9 }}
                    animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
                >
                    <div className='bg-neutral-600/50 h-16 w-16 rounded-sm flex items-center justify-center'>
                        <FileBracesCorner className='text-white' />
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-medium text-sm'>Notely for IOS</p>
                        <p className='text-xs text-gray-500'>Download Notely for your IOS device.</p>
                    </div>
                </motion.div>

                {/* BOX 3 */}
                <motion.div
                    className='w-2/3 h-20 rounded-lg bg-white p-4 flex items-center gap-4 overflow-hidden'
                    initial={{ y: 90, opacity: 0, scale: 0.9 }}
                    animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
                >
                    <div className='bg-neutral-600/50 h-16 w-16 rounded-sm flex items-center justify-center'>
                        <FileBracesCorner className='text-white' />
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-medium text-sm'>Notely for IOS</p>
                        <p className='text-xs text-gray-500'>Download Notely for your IOS device.</p>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    )
}

function Three({ className }: { className?: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
        amount: 0.4
    })

    return (
        <motion.div
            ref={ref}
            className={cn(
                "relative flex items-center justify-center w-full h-auto overflow-visible",  // <— allow glow bleed
                className
            )}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Glowing Background */}
            <DottedGlowBackground
                className="absolute inset-0 pointer-events-none -z-10 mask-radial-to-95% mask-radial-at-center"
                opacity={1}
                gap={10}
                radius={1.5}
                colorLightVar="--color-neutral-300"
                glowColorLightVar="--color-neutral-50"
                colorDarkVar="--color-neutral-500"
                glowColorDarkVar="--color-sky-500"
                backgroundOpacity={0}
                speedMin={0.4}
                speedMax={1.5}
                speedScale={1}
            />

            {/* FOREGROUND SVG */}
            <Threesvg className="w-[500px] h-auto relative z-10" />
        </motion.div>
    )
}


function Four({ className }: { className?: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.4 })
    const orbitVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 20,
                ease: [0.5, 0, 0.5, 1], // linear-like
                repeat: Infinity,
            },
        },
    }

    const iconVariants = {
        animate: {
            y: [0, -6, 0],
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                ease: [0.42, 0, 0.58, 1], // easeInOut
                repeat: Infinity,
                repeatType: "mirror",
            }
        }
    }

    return (
        <motion.div
            ref={ref}
            className={cn(
                "relative flex items-center justify-center w-full h-auto overflow-visible",
                className
            )}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="flex items-center justify-center w-full h-auto">
                <div className="relative w-58 h-58 flex items-end justify-center">
                    {/* circles */}
                    <div className="absolute bottom-0 w-64 h-64 rounded-full bg-white/20 shadow-2xl border border-white/30" />
                    <div className="absolute bottom-8 w-48 h-48 rounded-full bg-white/40 shadow-xl border border-white/50" />
                    <div className="absolute bottom-16 w-32 h-32 rounded-full bg-white/60 shadow-lg border border-white/70" />

                    {/* logo center */}
                    <div className="absolute bottom-24 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md z-20">
                        <Logo />
                    </div>

                    {/* ORBITING ICONS */}
                    <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    >
                    {/* TOP */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                        <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <OrbitIconSVG className="w-8 h-8" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Programed for you</p>
                                </TooltipContent>
                            </Tooltip>
                        </motion.div>
                    </div>

                    {/* RIGHT */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2">
                        <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Websvg className="w-8 h-8 text-black" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Access from anywhere</p>
                                </TooltipContent>
                            </Tooltip>
                        </motion.div>
                    </div>

                    {/* BOTTOM */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                        <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Reactsvg className="w-8 h-8 text-black" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>In React code!</p>
                            </TooltipContent>
                        </Tooltip>
                        </motion.div>
                    </div>

                    {/* LEFT */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2">
                        <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Angularsvg className="w-8 h-8 text-black" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>In Angluar code!</p>
                            </TooltipContent>
                        </Tooltip>
                        </motion.div>
                    </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

function Card({children,title,desc,className}:{children:React.ReactNode,title:string,desc: string,className?:string}) {
    return(
        <div className={cn('p-2 m-4 h-87 border rounded-lg shadow-xl transition', className)}>
            <div className='rounded-[6px] flex w-full justify-center items-center bg-black/70 h-62 overflow-hidden'>
                {children}
            </div>
            <div className='text-xl font-normal ml-4 mt-4'>
                {title}
                <p className='text-sm text-gray-500'>{desc}</p>
            </div>
        </div>
    )
}

function OrbitIconSVG(props: any) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path d="M9 8L5 11.6923L9 16M15 8L19 11.6923L15 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
        </svg>
    )
}



function Threesvg(props: React.SVGProps<SVGSVGElement>) {
    return(
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 131 43"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            className={props.className}
        >

            <path
            d="M0 9H32C32.5523 9 33 9.44772 33 10V33C33 33.5523 33.4477 34 34 34H66C66.5523 34 67 33.5523 67 33V30C67 29.4477 67.4477 29 68 29H91H96C96.5523 29 97 29.4477 97 30V41.5C97 42.0523 97.4477 42.5 98 42.5H130.5"
            stroke="url(#animatedGradient)"
            strokeWidth="1"
            />

            <rect x="27.5" y="4.5" width="10" height="10" rx="2" fill="white"/>
            <g filter="url(#filter0_dn_0_1)">
            <rect x="27.5" y="4.5" width="10" height="10" rx="2" fill="url(#paint0_linear_0_1)" shapeRendering="crispEdges"/>
            <rect x="27.55" y="4.55" width="9.9" height="9.9" rx="1.95" stroke="#787878" strokeWidth="0.1" shapeRendering="crispEdges"/>
            </g>
            <rect x="61.5" y="26.5" width="10" height="10" rx="2" fill="white"/>
            <g filter="url(#filter1_dn_0_1)">
            <rect x="61.5" y="26.5" width="10" height="10" rx="2" fill="url(#paint1_linear_0_1)" shapeRendering="crispEdges"/>
            <rect x="61.55" y="26.55" width="9.9" height="9.9" rx="1.95" stroke="#787878" strokeWidth="0.1" shapeRendering="crispEdges"/>
            </g>
            <rect x="27.5" y="26.5" width="10" height="10" rx="2" fill="white"/>
            <g filter="url(#filter2_dn_0_1)">
            <rect x="27.5" y="26.5" width="10" height="10" rx="2" fill="url(#paint2_linear_0_1)" shapeRendering="crispEdges"/>
            <rect x="27.55" y="26.55" width="9.9" height="9.9" rx="1.95" stroke="#787878" strokeWidth="0.1" shapeRendering="crispEdges"/>
            </g>
            <rect x="92.5" y="24.5" width="10" height="10" rx="2" fill="white"/>
            <g filter="url(#filter3_dn_0_1)">
            <rect x="92.5" y="24.5" width="10" height="10" rx="2" fill="url(#paint3_linear_0_1)" shapeRendering="crispEdges"/>
            <rect x="92.55" y="24.55" width="9.9" height="9.9" rx="1.95" stroke="#787878" strokeWidth="0.1" shapeRendering="crispEdges"/>
            </g>
            <g clipPath="url(#clip0_0_1)">
            <path d="M34.25 7.25H30.75C30.4739 7.25 30.25 7.47386 30.25 7.75V11.25C30.25 11.5261 30.4739 11.75 30.75 11.75H34.25C34.5261 11.75 34.75 11.5261 34.75 11.25V7.75C34.75 7.47386 34.5261 7.25 34.25 7.25Z" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M30.25 8.75H34.75" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M31.75 11.75V8.75" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g clipPath="url(#clip1_0_1)">
            <path d="M31.5 32.75L32.5 33.75L33.5 32.75" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32.5 31.5V33.75" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M34.72 33.0225C34.9373 32.8697 35.1003 32.6515 35.1853 32.3998C35.2703 32.148 35.2729 31.8758 35.1926 31.6225C35.1123 31.3692 34.9535 31.148 34.739 30.9911C34.5246 30.8343 34.2657 30.7498 34 30.75H33.685C33.6098 30.457 33.4691 30.1848 33.2735 29.954C33.0779 29.7232 32.8325 29.5398 32.5558 29.4176C32.2791 29.2954 31.9782 29.2375 31.6759 29.2484C31.3736 29.2592 31.0776 29.3386 30.8104 29.4804C30.5431 29.6221 30.3116 29.8227 30.133 30.067C29.9545 30.3112 29.8338 30.5928 29.7798 30.8904C29.7259 31.1881 29.7402 31.4941 29.8216 31.7855C29.903 32.0769 30.0495 32.3459 30.25 32.5725" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g clipPath="url(#clip2_0_1)">
            <path d="M67.625 30.85L65.375 29.5525" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M68.75 32.5V30.5C68.7499 30.4123 68.7268 30.3262 68.6829 30.2503C68.639 30.1744 68.5759 30.1113 68.5 30.0675L66.75 29.0675C66.674 29.0236 66.5878 29.0005 66.5 29.0005C66.4122 29.0005 66.326 29.0236 66.25 29.0675L64.5 30.0675C64.4241 30.1113 64.361 30.1744 64.3171 30.2503C64.2732 30.3262 64.2501 30.4123 64.25 30.5V32.5C64.2501 32.5877 64.2732 32.6738 64.3171 32.7497C64.361 32.8256 64.4241 32.8887 64.5 32.9325L66.25 33.9325C66.326 33.9764 66.4122 33.9995 66.5 33.9995C66.5878 33.9995 66.674 33.9764 66.75 33.9325L68.5 32.9325C68.5759 32.8887 68.639 32.8256 68.6829 32.7497C68.7268 32.6738 68.7499 32.5877 68.75 32.5Z" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M64.3175 30.24L66.5 31.5025L68.6825 30.24" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M66.5 34.02V31.5" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g clipPath="url(#clip3_0_1)">
            <path d="M100 29.27V29.5C99.9997 30.0391 99.8251 30.5637 99.5023 30.9955C99.1795 31.4272 98.7258 31.7431 98.2088 31.896C97.6919 32.0488 97.1393 32.0305 96.6336 31.8436C96.1279 31.6568 95.6962 31.3115 95.4027 30.8593C95.1093 30.407 94.9699 29.872 95.0054 29.3341C95.0409 28.7961 95.2493 28.2841 95.5996 27.8743C95.9498 27.4645 96.4232 27.1788 96.949 27.06C97.4749 26.9412 98.0251 26.9956 98.5175 27.215" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M100 27.5L97.5 30.0025L96.75 29.2525" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
            <filter id="filter0_dn_0_1" x="24" y="0" width="21" height="21" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_1"/>
            <feOffset dx="2" dy="1"/>
            <feGaussianBlur stdDeviation="2.25"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feTurbulence type="fractalNoise" baseFrequency="10 10" stitchTiles="stitch" numOctaves="3" result="noise" seed="702" />
            <feComponentTransfer in="noise" result="coloredNoise1">
            <feFuncR type="linear" slope="2" intercept="-0.5" />
            <feFuncG type="linear" slope="2" intercept="-0.5" />
            <feFuncB type="linear" slope="2" intercept="-0.5" />
            <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
            </feComponentTransfer>
            <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
            <feComponentTransfer in="noise1Clipped" result="color1">
            <feFuncA type="table" tableValues="0 0.29" />
            </feComponentTransfer>
            <feMerge result="effect2_noise_0_1">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
            </feMerge>
            <feBlend mode="normal" in="effect2_noise_0_1" in2="effect1_dropShadow_0_1" result="effect2_noise_0_1"/>
            </filter>
            <filter id="filter1_dn_0_1" x="58" y="22" width="21" height="21" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_1"/>
            <feOffset dx="2" dy="1"/>
            <feGaussianBlur stdDeviation="2.25"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feTurbulence type="fractalNoise" baseFrequency="10 10" stitchTiles="stitch" numOctaves="3" result="noise" seed="702" />
            <feComponentTransfer in="noise" result="coloredNoise1">
            <feFuncR type="linear" slope="2" intercept="-0.5" />
            <feFuncG type="linear" slope="2" intercept="-0.5" />
            <feFuncB type="linear" slope="2" intercept="-0.5" />
            <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
            </feComponentTransfer>
            <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
            <feComponentTransfer in="noise1Clipped" result="color1">
            <feFuncA type="table" tableValues="0 0.29" />
            </feComponentTransfer>
            <feMerge result="effect2_noise_0_1">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
            </feMerge>
            <feBlend mode="normal" in="effect2_noise_0_1" in2="effect1_dropShadow_0_1" result="effect2_noise_0_1"/>
            </filter>
            <filter id="filter2_dn_0_1" x="24" y="22" width="21" height="21" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_1"/>
            <feOffset dx="2" dy="1"/>
            <feGaussianBlur stdDeviation="2.25"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feTurbulence type="fractalNoise" baseFrequency="10 10" stitchTiles="stitch" numOctaves="3" result="noise" seed="702" />
            <feComponentTransfer in="noise" result="coloredNoise1">
            <feFuncR type="linear" slope="2" intercept="-0.5" />
            <feFuncG type="linear" slope="2" intercept="-0.5" />
            <feFuncB type="linear" slope="2" intercept="-0.5" />
            <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
            </feComponentTransfer>
            <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
            <feComponentTransfer in="noise1Clipped" result="color1">
            <feFuncA type="table" tableValues="0 0.29" />
            </feComponentTransfer>
            <feMerge result="effect2_noise_0_1">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
            </feMerge>
            <feBlend mode="normal" in="effect2_noise_0_1" in2="effect1_dropShadow_0_1" result="effect2_noise_0_1"/>
            </filter>
            <filter id="filter3_dn_0_1" x="89" y="20" width="21" height="21" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_1"/>
            <feOffset dx="2" dy="1"/>
            <feGaussianBlur stdDeviation="2.25"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feTurbulence type="fractalNoise" baseFrequency="10 10" stitchTiles="stitch" numOctaves="3" result="noise" seed="702" />
            <feComponentTransfer in="noise" result="coloredNoise1">
            <feFuncR type="linear" slope="2" intercept="-0.5" />
            <feFuncG type="linear" slope="2" intercept="-0.5" />
            <feFuncB type="linear" slope="2" intercept="-0.5" />
            <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
            </feComponentTransfer>
            <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
            <feComponentTransfer in="noise1Clipped" result="color1">
            <feFuncA type="table" tableValues="0 0.29" />
            </feComponentTransfer>
            <feMerge result="effect2_noise_0_1">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
            </feMerge>
            <feBlend mode="normal" in="effect2_noise_0_1" in2="effect1_dropShadow_0_1" result="effect2_noise_0_1"/>
            </filter>
            <linearGradient id="paint0_linear_0_1" x1="32.5" y1="4.5" x2="32.5" y2="14.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0.85"/>
            <stop offset="1" stopColor="#737373" stopOpacity="0.48"/>
            </linearGradient>
            <linearGradient id="paint1_linear_0_1" x1="66.5" y1="26.5" x2="66.5" y2="36.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0.85"/>
            <stop offset="1" stopColor="#737373" stopOpacity="0.48"/>
            </linearGradient>
            <linearGradient id="paint2_linear_0_1" x1="32.5" y1="26.5" x2="32.5" y2="36.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0.85"/>
            <stop offset="1" stopColor="#737373" stopOpacity="0.48"/>
            </linearGradient>
            <linearGradient id="paint3_linear_0_1" x1="97.5" y1="24.5" x2="97.5" y2="34.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0.85"/>
            <stop offset="1" stopColor="#737373" stopOpacity="0.48"/>
            </linearGradient>
            <clipPath id="clip0_0_1">
            <rect width="6" height="6" fill="white" transform="translate(29.5 6.5)"/>
            </clipPath>
            <clipPath id="clip1_0_1">
            <rect width="6" height="6" fill="white" transform="translate(29.5 28.5)"/>
            </clipPath>
            <clipPath id="clip2_0_1">
            <rect width="6" height="6" fill="white" transform="translate(63.5 28.5)"/>
            </clipPath>
            <clipPath id="clip3_0_1">
            <rect width="6" height="6" fill="white" transform="translate(94.5 26.5)"/>
            </clipPath>
            <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00000000" />
                <stop offset="50%" stopColor="#ffffffff" />
                <stop offset="60%" stopColor="#a3fffdff" />
                {/* <stop offset="65%" stopColor="#00000000" /> */}
                <stop offset="100%" stopColor="#00000000" />

                <animate
                    attributeName="x1"
                    from="-100%"
                    to="100%"
                    dur="3s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="x2"
                    from="0%"
                    to="200%"
                    dur="3s"
                    repeatCount="indefinite"
                />
                </linearGradient>

            </defs>
        </svg>

    )
}

function Reactsvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}   // ← props go here, on the <svg> itself
    >
      <title>react</title>
      <rect width="24" height="24" fill="none" />
      <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z" />
    </svg>
  );
}

function Angularsvg(props: React.SVGProps<SVGSVGElement>) {
    return(
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000" {...props}>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <title>angular_outlined</title> 
                <rect width="24" height="24" fill="none"></rect> 
                <path d="M12,2.5l8.84,3.15L19.5,17.35,12,21.5,4.5,17.35,3.16,5.65,12,2.5m0,2L5,7l1.08,9.22L12,19.5l5.92-3.28L19,7,12,4.5m0,1.22L16.58,16H14.87l-.93-2.28H10L9.12,16H7.41L12,5.72m1.34,6.58L12,9.07,10.66,12.3Z"></path> 
                </g>
            </svg>
    )
}

function Websvg(props: React.SVGProps<SVGSVGElement>) {
    return(
        <svg fill="#000000" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" className="cf-icon-svg" {...props}>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M16.417 9.57a7.917 7.917 0 1 1-8.144-7.908 1.758 1.758 0 0 1 .451 0 7.913 7.913 0 0 1 7.693 7.907zM5.85 15.838q.254.107.515.193a11.772 11.772 0 0 1-1.572-5.92h-3.08a6.816 6.816 0 0 0 4.137 5.727zM2.226 6.922a6.727 6.727 0 0 0-.511 2.082h3.078a11.83 11.83 0 0 1 1.55-5.89q-.249.083-.493.186a6.834 6.834 0 0 0-3.624 3.622zm8.87 2.082a14.405 14.405 0 0 0-.261-2.31 9.847 9.847 0 0 0-.713-2.26c-.447-.952-1.009-1.573-1.497-1.667a8.468 8.468 0 0 0-.253 0c-.488.094-1.05.715-1.497 1.668a9.847 9.847 0 0 0-.712 2.26 14.404 14.404 0 0 0-.261 2.309zm-.974 5.676a9.844 9.844 0 0 0 .713-2.26 14.413 14.413 0 0 0 .26-2.309H5.903a14.412 14.412 0 0 0 .261 2.31 9.844 9.844 0 0 0 .712 2.259c.487 1.036 1.109 1.68 1.624 1.68s1.137-.644 1.623-1.68zm4.652-2.462a6.737 6.737 0 0 0 .513-2.107h-3.082a11.77 11.77 0 0 1-1.572 5.922q.261-.086.517-.194a6.834 6.834 0 0 0 3.624-3.621zM11.15 3.3a6.82 6.82 0 0 0-.496-.187 11.828 11.828 0 0 1 1.55 5.89h3.081A6.815 6.815 0 0 0 11.15 3.3z"></path></g>
            </svg>
    )
}
export default Bento