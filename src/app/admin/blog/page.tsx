'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  PlusCircle, 
  Edit, 
  Trash2, 
  Eye, 
  LogOut,
  Calendar,
  FileText
} from 'lucide-react'
import { format } from 'date-fns'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  featured_image: string
  status: 'draft' | 'published'
  created_at: string
  published_at: string
}

export default function AdminBlogPage() {
  const router = useRouter()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    checkAuth()
    fetchPosts()
  }, [])

  const checkAuth = async () => {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      router.push('/login')
      return
    }
    
    if (user.email !== 'nityojjwal@gmail.com') {
      await supabase.auth.signOut()
      router.push('/login')
      return
    }
    
    setUserEmail(user.email)
  }

  const fetchPosts = async () => {
    const supabase = createClient()
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })
    
    setPosts(data || [])
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return
    
    const supabase = createClient()
    await supabase.from('blog_posts').delete().eq('id', id)
    fetchPosts()
  }

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[var(--light-ice)] to-white flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[var(--light-ice)] to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-[var(--navy)]">Blog Dashboard</h1>
            <p className="text-gray-600 mt-2">Logged in as {userEmail}</p>
          </div>
          
          <div className="flex gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-[var(--navy)] hover:bg-[var(--navy)]/90"
            >
              <Link href="/admin/blog/new">
                <PlusCircle className="w-5 h-5 mr-2" />
                New Post
              </Link>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {posts.length === 0 ? (
          <Card className="border-2">
            <CardContent className="p-12 text-center">
              <FileText className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No blog posts yet</h3>
              <p className="text-gray-600 mb-6">Create your first blog post to get started</p>
              <Button asChild className="bg-[var(--navy)] hover:bg-[var(--navy)]/90">
                <Link href="/admin/blog/new">
                  <PlusCircle className="w-5 h-5 mr-2" />
                  Create First Post
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="border-2 hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row gap-4 p-6">
                    {post.featured_image && (
                      <div className="relative w-full sm:w-40 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={post.featured_image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          post.status === 'published' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {post.status}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[var(--navy)] line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.published_at 
                          ? format(new Date(post.published_at), 'MMM dd, yyyy')
                          : format(new Date(post.created_at), 'MMM dd, yyyy')}
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        {post.status === 'published' && (
                          <Button 
                            asChild
                            size="sm" 
                            variant="outline"
                          >
                            <Link href={`/blog/${post.slug}`} target="_blank">
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Link>
                          </Button>
                        )}
                        
                        <Button 
                          asChild
                          size="sm" 
                          variant="outline"
                        >
                          <Link href={`/admin/blog/edit/${post.id}`}>
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Link>
                        </Button>
                        
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleDelete(post.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
