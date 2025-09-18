// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Download, ExternalLink, Calendar, MapPin } from "lucide-react"

// export function ResumeSection() {
//   return (
//     <section id="resume" className="py-20 bg-muted/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Resume</h2>
//           <p className="text-xl text-muted-foreground text-pretty">
//             My professional experience and educational background
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Resume Download */}
//           <div className="lg:col-span-1">
//             <Card className="sticky top-24">
//               <CardHeader>
//                 <CardTitle className="text-center">Download Resume</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="aspect-[8.5/11] bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
//                   <div className="text-center text-muted-foreground">
//                     <div className="text-4xl mb-2">📄</div>
//                     <p>Resume Preview</p>
//                   </div>
//                 </div>
//                 <Button className="w-full" size="lg">
//                   <Download className="mr-2 h-5 w-5" />
//                   Download PDF
//                 </Button>
//                 <Button variant="outline" className="w-full bg-transparent">
//                   <ExternalLink className="mr-2 h-5 w-5" />
//                   View Online
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Experience & Education */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Work Experience */}
//             <div>
//               <h3 className="text-2xl font-bold mb-6 text-primary">Work Experience</h3>
//               <div className="space-y-6">
//                 <Card>
//                   <CardContent className="p-6">
//                     <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
//                       <div>
//                         <h4 className="text-xl font-semibold">Software Development Engineering Intern</h4>
//                         <p className="text-primary font-medium">Amazon</p>
//                       </div>
//                       <div className="flex flex-col sm:items-end text-sm text-muted-foreground mt-2 sm:mt-0">
//                         <div className="flex items-center">
//                           <Calendar className="mr-1 h-4 w-4" />
//                           May 2025 - August 2025
//                         </div>
//                         <div className="flex items-center mt-1">
//                           <MapPin className="mr-1 h-4 w-4" />
//                           Austin, TX
//                         </div>
//                       </div>
//                     </div>
//                     <ul className="space-y-2 text-muted-foreground">
//                       <li>• Key responsibility or achievement in this role</li>
//                       <li>• Another important contribution or project you worked on</li>
//                       <li>• Quantifiable result or impact you made</li>
//                     </ul>
//                   </CardContent>
//                 </Card>

//                 <Card>
//                   <CardContent className="p-6">
//                     <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
//                       <div>
//                         <h4 className="text-xl font-semibold">Software Engineering Intern</h4>
//                         <p className="text-primary font-medium">Georgia Tech Research Institute</p>
//                       </div>
//                       <div className="flex flex-col sm:items-end text-sm text-muted-foreground mt-2 sm:mt-0">
//                         <div className="flex items-center">
//                           <Calendar className="mr-1 h-4 w-4" />
//                           May 2024 - August 2024
//                         </div>
//                         <div className="flex items-center mt-1">
//                           <MapPin className="mr-1 h-4 w-4" />
//                           Smyrna, GA
//                         </div>
//                       </div>
//                     </div>
//                     <ul className="space-y-2 text-muted-foreground">
//                       <li>• Key responsibility or achievement in this role</li>
//                       <li>• Another important contribution or project you worked on</li>
//                       <li>• Quantifiable result or impact you made</li>
//                     </ul>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>

//             {/* Education */}
//             <div>
//               <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>
//               <div className="space-y-4">
//                 <Card>
//                   <CardContent className="p-6">
//                     <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
//                       <div>
//                         <h4 className="text-xl font-semibold">B.S. / M.S. </h4>
//                         <p className="text-primary font-medium">Georgia Institute of Technology</p>
//                         <p className="text-muted-foreground">Computer Science</p>
//                       </div>
//                       <div className="flex flex-col sm:items-end text-sm text-muted-foreground mt-2 sm:mt-0">
//                         <div className="flex items-center">
//                           <Calendar className="mr-1 h-4 w-4" />
//                           May 2027
//                         </div>
//                         <div className="flex items-center mt-1">
//                           <MapPin className="mr-1 h-4 w-4" />
//                           Atlanta, GA
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-muted-foreground">
//                       GPA: 3.9
//                     </p>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>

//             {/* Certifications */}
//             {/* <div>
//               <h3 className="text-2xl font-bold mb-6 text-primary">Certifications</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <Card>
//                   <CardContent className="p-4 text-center">
//                     <h4 className="font-semibold">Certification Name</h4>
//                     <p className="text-sm text-muted-foreground">Issuing Organization</p>
//                     <p className="text-sm text-muted-foreground">Year</p>
//                   </CardContent>
//                 </Card>
//                 <Card>
//                   <CardContent className="p-4 text-center">
//                     <h4 className="font-semibold">Another Certification</h4>
//                     <p className="text-sm text-muted-foreground">Issuing Organization</p>
//                     <p className="text-sm text-muted-foreground">Year</p>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Calendar, MapPin } from "lucide-react"

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Resume</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            My professional experience and educational background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resume Download */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                {/* <CardTitle className="text-center">Resume</CardTitle> */}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-[8.5/11] bg-white rounded-lg border-2 border-border overflow-hidden">
                  <iframe src="/resume.pdf" className="w-full h-full" title="Resume Preview" />
                </div>
                <Button className="w-full" size="lg" asChild>
                  <a href="/resume.pdf" download="resume.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                  </a>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Online
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Work Experience</h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold">Software Development Engineering Intern</h4>
                        <p className="text-primary font-medium">Amazon</p>
                      </div>
                      <div className="flex flex-col sm:items-end text-sm text-muted-foreground mt-2 sm:mt-0">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          May 2025 - August 2025
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="mr-1 h-4 w-4" />
                          Austin, TX
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Built a testing system to generate synthetic packets using firewall traffic and validate invariance of proposed ACLs</li>
                      <li>• Developed a nested workflow to orchestrate traffic simulation and violation detection across varying subnet sizes</li>
                      <li>• Improved performance by up to 100×, enabling faster and more scalable ACL verification across Amazon FC sites</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold">Software Engineering Intern</h4>
                        <p className="text-primary font-medium">Georgia Tech Research Institute</p>
                      </div>
                      <div className="flex flex-col sm:items-end text-sm text-muted-foreground mt-2 sm:mt-0">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          May 2024 - August 2024
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="mr-1 h-4 w-4" />
                          Smyrna, GA
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Leveraged React JS, CSS, Django, & TypeScript to develop web applications to control/display hardware systems</li>
                      <li>• Integrated RabbitMQ queue manager to ensure a seamless connection between the hardware and various software</li>
                      <li>• Coordinated with a team of 30+ using AGILE methodology to ensure efficient development and communication</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold">B.S. / M.S. </h4>
                        <p className="text-primary font-medium">Georgia Institute of Technology</p>
                        <p className="text-muted-foreground">Computer Science</p>
                      </div>
                      <div className="flex flex-col sm:items-end text-sm text-muted-foreground mt-2 sm:mt-0">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          May 2027
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="mr-1 h-4 w-4" />
                          Atlanta, GA
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">GPA: 3.9</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Certifications */}
            {/* <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold">Certification Name</h4>
                    <p className="text-sm text-muted-foreground">Issuing Organization</p>
                    <p className="text-sm text-muted-foreground">Year</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold">Another Certification</h4>
                    <p className="text-sm text-muted-foreground">Issuing Organization</p>
                    <p className="text-sm text-muted-foreground">Year</p>
                  </CardContent>
                </Card>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
