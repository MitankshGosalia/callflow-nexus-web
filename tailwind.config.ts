
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					100: '#E0DFFF',
					200: '#C1BEFF',
					300: '#A29DFF',
					400: '#867CFF',
					500: '#6E44FF',
					600: '#5836DB',
					700: '#4329B7',
					800: '#301D94',
					900: '#21157A',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					100: '#D6F5FF',
					200: '#AEE8FF',
					300: '#85D7FF',
					400: '#5CC6FF',
					500: '#00E6F6',
					600: '#00B3D9',
					700: '#0085B3',
					800: '#005A8C',
					900: '#003B66',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					100: '#FFE0E9',
					200: '#FFC1D3',
					300: '#FF9EBC',
					400: '#FF7BA6',
					500: '#FF3366',
					600: '#DB285A',
					700: '#B71E4F',
					800: '#941544',
					900: '#7A0F3A',
				},
				blue: {
					light: '#1C3F60',
					dark: '#0A1128',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 0 0 rgba(110, 68, 255, 0.7)'
					},
					'50%': { 
						opacity: '0.8',
						boxShadow: '0 0 0 15px rgba(110, 68, 255, 0)'
					}
				},
				'rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'wave': {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
					'100%': { transform: 'translateY(0)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'scale-out': 'scale-out 0.2s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-out-right': 'slide-out-right 0.3s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float 8s ease-in-out infinite',
				'float-fast': 'float 4s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'rotate-slow': 'rotate 15s linear infinite',
				'gradient-shift': 'gradient-shift 5s ease infinite',
				'wave': 'wave 1s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'linear-gradient(to right bottom, rgba(10, 17, 40, 0.9), rgba(28, 63, 96, 0.9))',
				'feature-gradient': 'linear-gradient(135deg, #6E44FF 0%, #00E6F6 100%)',
				'accent-gradient': 'linear-gradient(135deg, #FF3366 0%, #FF7BA6 100%)',
				'dark-gradient': 'linear-gradient(to bottom, #0A1128 0%, #1C3F60 100%)',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				title: ['Poppins', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
