import { createClient } from '@/lib/supabase/server'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowLeft } from 'lucide-react'
import { format } from 'date-fns'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const supabase = await createClient()
  
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-b from-[var(--light-ice)] to-white">
        <article className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button 
              asChild 
              variant="ghost" 
              className="mb-8 text-[var(--navy)] hover:text-blue-600"
            >
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--navy)] leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex items-center gap-6 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={post.published_at}>
                      {format(new Date(post.published_at), 'MMMM dd, yyyy')}
                    </time>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">By Admin</span>
                  </div>
                </div>
              </div>

              {post.featured_image && (
                <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={post.featured_image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-[var(--navy)] prose-headings:font-bold
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-[var(--navy)] prose-strong:font-semibold
                  prose-code:text-blue-600 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
                  prose-pre:bg-gray-900 prose-pre:text-gray-100
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-4 prose-blockquote:italic
                  prose-img:rounded-xl prose-img:shadow-lg
                  prose-ul:list-disc prose-ol:list-decimal"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            <div className="mt-16 pt-8 border-t-2 border-gray-200">
              <Button asChild size="lg" className="bg-[var(--navy)] hover:bg-[var(--navy)]/90">
                <Link href="/blog">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  View All Posts
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  const supabase = await createClient()
  
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('status', 'published')

  return posts?.map((post) => ({
    slug: post.slug,
  })) || []
}
