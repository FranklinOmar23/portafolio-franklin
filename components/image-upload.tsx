"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, X } from "lucide-react"
import Image from "next/image"

interface ImageUploadProps {
  currentImage: string
  onImageChange: (imageUrl: string) => void
}

export function ImageUpload({ currentImage, onImageChange }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [showUpload, setShowUpload] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsUploading(true)
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        onImageChange(result)
        setIsUploading(false)
        setShowUpload(false)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="relative group">
      <div className="relative">
        <Image
          src={currentImage || "/placeholder.svg"}
          alt="Franklin Disla - Full Stack Developer"
          width={400}
          height={500}
          className="rounded-2xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
          <Button onClick={() => setShowUpload(true)} className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
            <Upload className="w-4 h-4 mr-2" />
            Change Photo
          </Button>
        </div>
      </div>

      {showUpload && (
        <Card className="absolute top-4 right-4 z-10 w-64">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Upload New Photo</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowUpload(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                disabled={isUploading}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
              />
              {isUploading && <p className="text-sm text-gray-500">Uploading...</p>}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
