
import React from "react";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, Users, Lightbulb, Heart, ThumbsUp, 
  MessageCircle, Calendar, User, ExternalLink
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ResourcesCommunity = () => {
  const communityStats = [
    { label: "Members", value: "10,000+", icon: <Users className="h-6 w-6" /> },
    { label: "Topics", value: "5,000+", icon: <MessageSquare className="h-6 w-6" /> },
    { label: "Solutions", value: "15,000+", icon: <Lightbulb className="h-6 w-6" /> },
    { label: "Likes", value: "50,000+", icon: <Heart className="h-6 w-6" /> }
  ];

  const popularTopics = [
    {
      id: 1,
      title: "Best practices for AI Call Center implementation",
      author: {
        name: "Alex Chen",
        avatar: "/placeholder.svg"
      },
      category: "AI Call Center",
      replies: 42,
      views: 1256,
      lastActivity: "1 hour ago"
    },
    {
      id: 2,
      title: "How to customize Virtual Assistant responses?",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg"
      },
      category: "Virtual Assistant",
      replies: 28,
      views: 987,
      lastActivity: "3 hours ago"
    },
    {
      id: 3,
      title: "Setting up advanced dashboard metrics",
      author: {
        name: "Michael Brown",
        avatar: "/placeholder.svg"
      },
      category: "Analytics Suite",
      replies: 36,
      views: 1122,
      lastActivity: "5 hours ago"
    },
    {
      id: 4,
      title: "Integration with Salesforce: Step by step guide",
      author: {
        name: "Emma Wilson",
        avatar: "/placeholder.svg"
      },
      category: "Integrations",
      replies: 54,
      views: 1876,
      lastActivity: "1 day ago"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Introduction to AI Call Center Webinar",
      date: "June 15, 2025",
      time: "11:00 AM EST",
      host: "Product Team",
      registrations: 345
    },
    {
      id: 2,
      title: "Advanced Analytics Workshop",
      date: "June 22, 2025",
      time: "2:00 PM EST",
      host: "Data Science Team",
      registrations: 278
    },
    {
      id: 3,
      title: "Community Q&A Session",
      date: "June 30, 2025",
      time: "1:00 PM EST",
      host: "Support Team",
      registrations: 156
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Community Forums</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our active community of users, ask questions, and share your experiences
            </p>
            <div className="mt-8">
              <Button size="lg">Join the Community</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {communityStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto">{stat.icon}</div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-3xl font-bold mb-1">{stat.value}</CardTitle>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Tabs defaultValue="discussions" className="mb-12">
            <TabsList className="mb-6">
              <TabsTrigger value="discussions">Popular Discussions</TabsTrigger>
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="discussions">
              <Card>
                <div className="divide-y">
                  {popularTopics.map((topic) => (
                    <div key={topic.id} className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="hidden sm:flex h-10 w-10">
                          <AvatarImage src={topic.author.avatar} alt={topic.author.name} />
                          <AvatarFallback>{topic.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="font-normal">
                              {topic.category}
                            </Badge>
                          </div>
                          <h3 className="font-medium text-lg mb-2">
                            <a href="#" className="hover:text-primary transition-colors">
                              {topic.title}
                            </a>
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{topic.author.name}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>{topic.replies} replies</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{topic.views} views</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>Last activity {topic.lastActivity}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 flex justify-center border-t">
                  <Button variant="outline" asChild>
                    <a href="#" className="flex items-center gap-2">
                      View All Discussions
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id}>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span>Hosted by: {event.host}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{event.registrations} registered</span>
                        </div>
                        <Button className="w-full mt-4">Register Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-muted rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
            <p className="text-lg mb-6">
              Ask our community or contact our support team for assistance
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="default">Create New Topic</Button>
              <Button variant="outline">Contact Support</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesCommunity;
