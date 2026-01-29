'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Save, Eye } from 'lucide-react'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default function EditBlogPostPage({ params }: PageProps) {
  const router = useRouter()
  const [postId, setPostId] = useState('')
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [featuredImage, setFeaturedImage] = useState('')
  const [status, setStatus] = useState<'draft' | 'published'>('draft')
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPost()
  }, [])

  const loadPost = async () => {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user || user.email !== 'nityojjwal@gmail.com') {
      router.push('/login')
      return
    }

    const resolvedParams = await params
    const id = resolvedParams.id
    setPostId(id)

    const { data: post } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single()

    if (post) {
      setTitle(post.title)
      setSlug(post.slug)
      setExcerpt(post.excerpt || '')
      setContent(post.content)
      setFeaturedImage(post.featured_image || '')
      setStatus(post.status)
    }

    setLoading(false)
  }

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  const handleSave = async (publishNow: boolean = false) => {
    if (!title || !slug || !content) {
      alert('Please fill in title, slug, and content')
      return
    }

    setSaving(true)
    const supabase = createClient()

    const postData: any = {
      title,
      slug,
      excerpt: excerpt || content.substring(0, 200),
      content,
      featured_image: featuredImage,
      status: publishNow ? 'published' : status,
      updated_at: new Date().toISOString(),
    }

    if (publishNow && status === 'draft') {
      postData.published_at = new Date().toISOString()
    }

    const { error } = await supabase
      .from('blog_posts')
      .update(postData)
      .eq('id', postId)

    if (error) {
      alert('Error updating post: ' + error.message)
      setSaving(false)
      return
    }

    router.push('/admin/blog')
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
      <div className="max-w-5xl mx-auto">
        <Button 
          asChild 
          variant="ghost" 
          className="mb-6 text-[var(--navy)]"
        >
          <Link href="/admin/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-[var(--navy)]">
              Edit Blog Post
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter post title"
                className="text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug (URL) *</Label>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(generateSlug(e.target.value))}
                placeholder="post-url-slug"
              />
              <p className="text-sm text-gray-600">
                URL: /blog/{slug || 'your-post-slug'}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief description (2-3 lines)"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="featured_image">Featured Image URL</Label>
              <Input
                id="featured_image"
                value={featuredImage}
                onChange={(e) => setFeaturedImage(e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content (HTML supported) *</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your blog post content here. You can use HTML tags for formatting."
                rows={20}
                className="font-mono text-sm"
              />
              <p className="text-xs text-gray-600">
                Supports HTML: &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;code&gt;, &lt;pre&gt;, &lt;blockquote&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;, &lt;a&gt;
              </p>
            </div>

            <div className="space-y-2">
              <Label>Status</Label>
              <div className="flex gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="draft"
                    checked={status === 'draft'}
                    onChange={(e) => setStatus(e.target.value as 'draft')}
                    className="w-4 h-4"
                  />
                  <span>Draft</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="published"
                    checked={status === 'published'}
                    onChange={(e) => setStatus(e.target.value as 'published')}
                    className="w-4 h-4"
                  />
                  <span>Published</span>
                </label>
              </div>
            </div>

            <div className="flex gap-4 pt-6 border-t">
              <Button
                onClick={() => handleSave(false)}
                disabled={saving}
                variant="outline"
                size="lg"
              >
                <Save className="w-5 h-5 mr-2" />
                {saving ? 'Saving...' : 'Save Changes'}
              </Button>

              {status === 'draft' && (
                <Button
                  onClick={() => handleSave(true)}
                  disabled={saving}
                  className="bg-[var(--navy)] hover:bg-[var(--navy)]/90"
                  size="lg"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  {saving ? 'Publishing...' : 'Publish Now'}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
