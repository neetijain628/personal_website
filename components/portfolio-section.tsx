import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Download, FileText } from "lucide-react"
import Image from "next/image"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Portfolio</h2>
          <p className="text-xl text-muted-foreground text-pretty">Showcasing my professional work and achievements</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Document 1 */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              {/* <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                <Image
                  src="/professional-document-preview-or-project-screensho.jpg"
                  alt="Document 1 preview"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div> */}
              <CardTitle className="flex items-center text-primary">
                <FileText className="mr-2 h-5 w-5" />
                Prediction of COVID-19 Perception Using Personal Financial Circumstances
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Category</Badge>
                <Badge variant="secondary">Skill Used</Badge>
                <Badge variant="secondary">Tool/Software</Badge>
              </div> */}

              <p className="text-muted-foreground leading-relaxed">
                While individual perceptions of COVID-19 severity influence adherence to public health measures, little 
                research has explored how personal financial factors—such as income, employment stability, and health 
                insurance status—shape these beliefs. This project uses classification models on the survey data 
                to determine whether financial status is predictive of individual attitudes toward COVID-19. My main role in the 
                project was to perform some data pre-processing and the MCA portion.
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Key Highlights:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Data-preprocessing methods like MCA, SMOTE, and one-hot encoding</li>
                  <li>• Models: Hierarchical Clustering, Logistic Regression, SVM, RandomForest</li>
                  <li>• Used various quantitative metrics to produce meaningful results</li>
                </ul>
              </div>

              <div className="flex gap-3 pt-4">
                <Button asChild size="sm" className="flex-1">
                  <a href={"https://github.gatech.edu/pages/ml-covid-19-project/ml-covid-19-project-repo/"} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Document
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Document 2 */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <FileText className="mr-2 h-5 w-5" />
                GreenPlate Mobile App
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                This mobile application, coded in Android Studio, allows users to effectively manage 
                all aspects of their food intake. They are able to create grocery lists, track what's 
                in their pantries, track nurtient/caloric intake, and even determine how certain food
                choices will correlate to their goals. My role in the project was primarily to serve as a 
                UI/UX engineer.
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Key Highlights:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Uses SOLID and GRASP design principles</li>
                  <li>• Scalable firebase architecture</li>
                  <li>• Customer data secured via authentication</li>
                </ul>
              </div>

              <div className="flex gap-3 pt-4">
                <Button asChild size="sm" className="flex-1">
                  <a href={"https://theflashwin.github.io/CS2340A_Team21/"} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Document
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Projects Section */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Additional Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="font-semibold mb-2">Data Analysis</h4>
                <p className="text-sm text-muted-foreground">Statistical analysis and visualization projects</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-semibold mb-2">Design Work</h4>
                <p className="text-sm text-muted-foreground">Creative projects and visual design solutions</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h4 className="font-semibold mb-2">Business Projects</h4>
                <p className="text-sm text-muted-foreground">Strategic planning and business development work</p>
              </CardContent>
            </Card>
          </div>
        </div> */}
      </div>
    </section>
  )
}
