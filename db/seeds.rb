# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Monster.destroy_all

ari = User.create!(username: 'ari', email: 'ari@ga.co', password: 'password', name: 'ari')
j = User.create!(username: 'j', email: 'jsx@ga.co', password: 'password', name: 'j')
bell = User.create!(username: 'bell', email: 'bell@ga.co', password: 'password', name: 'bell')
dom = User.create!(username: 'dom', email: 'dom@ga.co', password: 'password', name: 'dom')
ramsey = User.create!(username: 'ramsey', email: 'ramsey@ga.co', password: 'password', name: 'ramsey')
drew = User.create!(username: 'drew', email: 'drew@ga.co', password: 'password', name: 'drew')

puts "#{User.count} users created!"

Monster.create!(user: ari, name: 'Stacey', description: 'A friendly monster')
Monster.create!(user: j, name: 'Tracey', description: 'A nice monster')
Monster.create!(user: bell, name: 'Macey', description: 'A silly monster')
Monster.create!(user: dom, name: 'Lacey', description: 'A goofy monster')
Monster.create!(user: ramsey, name: 'Kacey', description: 'A wonderful monster')
Monster.create!(user: drew, name: 'Jacey', description: 'An excellent monster')

puts "#{Monster.count} monsters created!"