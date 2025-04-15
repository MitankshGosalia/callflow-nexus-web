
import React from "react";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User, MessageCircle, Bookmark, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FadeIn, SlideInRight } from "@/components/animations/AnimatedElement";
import { FloatingElements } from "@/components/animations/FloatingElements";

const Blog = () => {
  const blogPosts = [
    {
      title: "Getting Started with AI Call Center Integration",
      description: "Learn how to set up and optimize your AI-powered call center for maximum efficiency.",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg",
        role: "AI Solutions Architect"
      },
      date: "April 15, 2025",
      readTime: "8 min read",
      comments: 12,
      category: "Tutorials"
    },
    {
      title: "Best Practices for Virtual Assistant Development",
      description: "Discover the key principles and strategies for creating effective virtual assistants.",
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg",
        role: "Senior Developer"
      },
      date: "April 14, 2025",
      readTime: "12 min read",
      comments: 8,
      category: "Best Practices"
    },
    {
      title: "The Future of AI in Customer Service",
      description: "Explore upcoming trends and innovations in AI-powered customer service solutions.",
      author: {
        name: "Emma Wilson",
        avatar: "/placeholder.svg",
        role: "Product Manager"
      },
      date: "April 13, 2025",
      readTime: "10 min read",
      comments: 15,
      category: "Industry Insights"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-24">
        <FloatingElements 
          className="opacity-50" 
          count={8} 
          speed="slow" 
          type="mixed" 
        />
        
        <section className="container mx-auto px-4 py-12 relative">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Latest Blog Posts</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest insights, tutorials, and news about our AI solutions
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <SlideInRight key={index} delay={index * 200}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar>
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{post.author.name}</p>
                        <p className="text-sm text-muted-foreground">{post.author.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments} comments</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SlideInRight>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="group">
              View All Posts
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
