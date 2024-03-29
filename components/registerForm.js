// image from https://icons8.com/icon/pack/profile/color
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { loginStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

const registerSchema = yup.object({
   displayName: yup.string()
                .required()
                .min(2)
                .max(10),
   email: yup.string()
           .required()
           .email(),
    password: yup.string()
              .required()
              .min(6)
              .max(20),
    bio: yup.string()
         .required()
         .max(30)
})
export default function RegisterForm({ registerUser }){

  return(
      <View style={styles.container}>
        <Image  source={require('../assets/newUser.png')} style={styles.image}/>
        <Formik 
          initialValues={{email: '', password: ''}}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            registerUser(values);

          }}
        >
          {(formikProps) => (
             <View>
             <TextInput
              style={styles.input}
                placeholder='display name'
                onChangeText={formikProps.handleChange('displayName')}
                value={formikProps.values.displayName}
                onBlur={formikProps.handleBlur('displayName')}
              />
              <Text style={styles.errorMessage}>{ formikProps.touched.displayName && formikProps.errors.displayName } </Text>

              <TextInput 
                style={styles.input}
                placeholder='email'
                onChangeText={formikProps.handleChange('email')}
                value={formikProps.values.email}
                onBlur={formikProps.handleBlur('email')}
              />
              <Text style={styles.errorMessage}>{ formikProps.touched.email && formikProps.errors.email } </Text>

               <TextInput 
                style={styles.input}
                placeholder='password'
                autoCapitalize='none'
                secureTextEntry
                onChangeText={formikProps.handleChange('password')}
                value={formikProps.values.password}
                onBlur={formikProps.handleBlur('password')}
              />
              <Text style={styles.errorMessage}>{ formikProps.touched.password &&  formikProps.errors.password } </Text>

             <TextInput
              style={styles.input}
                placeholder='bio: sale yourself'
                onChangeText={formikProps.handleChange('bio')}
                value={formikProps.values.bio}
                onBlur={formikProps.handleBlur('bio')}
              />
              <Text style={styles.errorMessage}>{ formikProps.touched.bio && formikProps.errors.bio } </Text>

              <TouchableOpacity onPress={formikProps.handleSubmit}>
                <View style={loginStyles.loginButton}>
                    <Text style={loginStyles.loginButtonText}>Create account</Text>
                </View>
            </TouchableOpacity>
          </View>
          )}

        </Formik>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 30,
    height: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  errorMessage: {
    color: 'coral',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
}
});