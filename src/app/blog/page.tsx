import { createClient } from '@/lib/supabase/server'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  featured_image: string
  published_at: string
}

export default async function BlogPage() {
  const supabase = await createClient()
  
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-b from-[var(--light-ice)] to-white">
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-5xl sm:text-6xl font-bold text-[var(--navy)]">
                Blog & Insights
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Industry insights, updates, and stories from the world of cold-chain logistics
              </p>
            </div>

            {!posts || posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No blog posts yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: BlogPost) => (
                  <Card 
                    key={post.id}
                    className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-[var(--ice-blue)]"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.featured_image || 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Refregirated-van-1769434761878.png?width=8000&height=8000&resize=contain'}
                        alt={post.title}
                        width={400}
                        height={224}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {format(new Date(post.published_at), 'MMM dd, yyyy')}
                      </div>
                      
                      <h2 className="text-2xl font-bold text-[var(--navy)] group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-700 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <Button 
                        asChild
                        variant="ghost" 
                        className="group/btn p-0 h-auto font-semibold text-blue-600 hover:text-blue-700"
                      >
                        <Link href={`/blog/${post.slug}`} className="flex items-center">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
