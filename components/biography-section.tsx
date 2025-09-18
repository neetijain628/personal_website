import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Award, MapPin } from "lucide-react"

export function BiographySection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">About Me</h2>
          <p className="text-xl text-muted-foreground text-pretty">Get to know my professional journey and expertise</p>
        </div>

        <div className="items-start">
          {/* Biography Text */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm currently a Senior at Georgia Tech, pursuing my BS/MS degree in Computer Science with
                    specializations in Intelligence, Devices, and Machine Learning. I'm passionate about leveraging 
                    software to support technological advancements and create real-world impact. I have a plethora
                    of professional and academic experiences that allow me to bring a unique perspective to every 
                    project.
                  </p>
                  <p>
                    My professional experiences include being a Software Development Engineering Intern at Amazon 
                    this past summer and a Software Development Intern at Georgia Tech Research Institute (Electronic 
                    Systems Laboratory). I'm seeking internship opportunities that will allow me to expand my software
                    engineering skills, specifically in backend, full stack, and machine learning.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Atlanta, GA</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-muted-foreground">B.S. Computer Science</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills & Expertise */}
          {/* <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                  <Briefcase className="mr-3 h-6 w-6" />
                  Core Expertise
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Skill 1</Badge>
                      <Badge variant="secondary">Skill 2</Badge>
                      <Badge variant="secondary">Skill 3</Badge>
                      <Badge variant="secondary">Skill 4</Badge>
                      <Badge variant="secondary">Skill 5</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Professional Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Leadership</Badge>
                      <Badge variant="outline">Project Management</Badge>
                      <Badge variant="outline">Communication</Badge>
                      <Badge variant="outline">Problem Solving</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                  <Award className="mr-3 h-6 w-6" />
                  Achievements
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Notable achievement or award you've received
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Significant project or milestone you've accomplished
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Recognition or certification you've earned
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  )
}
