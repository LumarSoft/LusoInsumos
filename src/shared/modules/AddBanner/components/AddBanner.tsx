"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-menubar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import React, { useState } from 'react'

export const AddBanner = () => {
    const [alt, setAlt] = useState("")
    const [file, setFile] = useState<File | null>(null)
    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;



    }


    return (
        <Card className="max-w-3xl m-auto">
            <form>
                <CardHeader className="text-center">
                    <CardTitle>Agregar banner</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <Label>
                        Alt
                        <Input type='text' onChange={handleInputChange} />
                    </Label>

                </CardContent>
                <CardFooter>
                    <Button type="button" className="w-full" onClick={handleSave}>
                        Cargar
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
