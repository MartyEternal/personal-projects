def playGame():   
    introduction = '''Hello and welcome to the Pythonland Adventure!
The kingdom of Pythonland needs your help! The evil Lord Evilton has stolen the King's gold, 
and we need your help to get it back!'''
    print(introduction)
    
    stillPlaying = True
    while stillPlaying:
        choice = input("Do you accept the challenge? (y/n) ")
        if choice == "y":
            print("You approach Lord Evilton's castle, but there are guards at the door. How do you want to proceed?")
            choice = input("1: Throw a rock in the bushes to distract them \n2: Try to fight through them ")
            if choice == "1":
                print("The guards are distracted long enough for you to run into the castle! \n")
                print("Inside the doorway you enter a room with three doors. Which door do you choose?")
                choice = input("1: The red door, 2: The black door, 3: The blue door ")
                if choice == "1":
                    print("The red door leads directly into a pit of lava.")
                elif choice == "2":
                    print("The black door leads to the throne room! Lord Evilton sits on his throne guarding his stolen gold.")
                    choice = input("Do you 1: Fight or 2: Run ")
                    if choice == "1":
                        print("You fight Lord Evilton and win! You grab the gold and escape to safety! The King thanks you.")
                    else:
                        print("You run from the castle to safety.")
                elif choice == "3":
                    print("The blue door leads to the gold room, you grab the gold and escape to safety! The King thanks you.")
                
            else:
                print("You are too weak, and you lose the battle.")
        
        
        playAgain = input("Do you want to keep playing? (y/n) ")
        if playAgain == "n":
            print("Thanks for playing")
            stillPlaying = False
playGame()