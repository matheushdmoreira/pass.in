import React, { useState } from 'react'
import { Link, Redirect } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Alert, Image, StatusBar, View } from 'react-native'

import { colors } from '@/styles/colors'

import { api } from '@/server/api'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

import { useBadgeStore } from '@/store/badge-store'

export default function Home() {
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const badStore = useBadgeStore()

  async function handleAccessCredential() {
    if (!code.trim()) {
      return Alert.alert('Credencial', 'Informe o código do ingresso!')
    }

    try {
      setIsLoading(true)

      const { data } = await api.get(`/attendees/${code}/badge`)
      badStore.save(data.badge)
    } catch (error) {
      console.log(error)
      setIsLoading(false)

      return Alert.alert('Ingresso', 'Ingresso não encontrado!')
    }
  }

  if (badStore.data?.checkInURL) {
    return <Redirect href="/ticket" />
  }

  return (
    <View className="flex-1 bg-green-500  items-center justify-center p-8">
      <StatusBar barStyle="light-content" />

      <Image
        source={require('@/assets/logo.png')}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-full mt-12 gap-3">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color={colors.green[200]}
          />

          <Input.Field
            placeholder="Código do ingresso"
            onChangeText={(value) => setCode(value)}
            value={code}
          />
        </Input>

        <Button
          title="Acessar credencial"
          onPress={handleAccessCredential}
          isLoading={isLoading}
        />

        <Link
          href="/register"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  )
}
