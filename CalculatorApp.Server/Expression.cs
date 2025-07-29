using System.Diagnostics;
using System.Collections.Generic;
using System.Reflection.Metadata.Ecma335;
namespace CalculatorApp.Server
{
    public class Expression
    {
        public string Value { get; set; }
        private List<Sym>? PolishNotation { get; set; }
        public Expression(string value)
        {
            this.Value = value;
            Debug.WriteLine($"Input: {value}");
            InfixToPolish(value);
        }
        public double? Calculate() 
        {
            double res;
            Stack<Sym> stack = new();

            if (PolishNotation != null)
                foreach (var item in PolishNotation)
                {
                    if (!item.IsOperator) stack.Push(item);
                    else stack.Push(new Sym((float)CallOperation(stack.Pop().Value, stack.Pop().Value, (int)item.Value),false));
                }
            else return null;

            res = stack.Pop().Value;

            return res;
        }
        private int InfixToPolish(string infix)
        {
            // OperatorPrecedence function returns true if operator o1 has higher precedence than o2
            // false if they are the same or o1 is of lower precedence. o2 is always the operator on the stack.
            Func<int, int, bool> OperatorPrecedence =
                (o1, o2) => (o1 % 3 > o2 % 3) ? true : false;

            string number = "";
            Stack<Sym> stack = new();
            List<Sym> postfix = [];

            for (int i=0 ; i<infix.Length ; i++)
            {
                int c = OperationValue(infix[i]);
                switch (c)
                {
                    case (int)Symbols.Number:
                        number += infix[i];
                        break;
                    case (int)Symbols.LBracket:
                        stack.Push(new Sym(c,true));
                        break;
                    case (int)Symbols.RBracket:
                        while(stack.Peek().Value != (int)Symbols.LBracket)
                            postfix.Add(stack.Pop());
                        stack.Pop();
                        break;
                    case (int)Symbols.Addition:
                    case (int)Symbols.Multiplication:
                    case (int)Symbols.Exponentiation:
                    case (int)Symbols.Subtraction:
                    case (int)Symbols.Division:
                        postfix.Add(new Sym (float.Parse(number),false));
                        number = "";
                        if (stack.Count != 0)
                            if( OperatorPrecedence(c,(int)stack.Peek().Value) )
                                stack.Push(new Sym(c,true));
                            else {
                                while (true){
                                    if (stack.Count == 0) break;
                                    else if (!OperatorPrecedence(c, (int)stack.Peek().Value))
                                        postfix.Add(stack.Pop());
                                    else break;
                                }
                                stack.Push(new Sym(c, true));
                            }
                        else stack.Push(new Sym(c, true));
                        if (number != "") {
                            postfix.Add(new Sym(float.Parse(number), false));
                            number = "";
                        }
                        break;
                    default:
                        PolishNotation = null;
                        return 0;
                }
            }
            if (number != "") postfix.Add(new Sym(float.Parse(number), false));
            while (stack.Count != 0) postfix.Add(stack.Pop());
            PolishNotation = postfix;
            string p = "";
            foreach (Sym c in PolishNotation)
            {
                if (c.IsOperator)
                    p += (char)OperationSymbol((int)c.Value);
                else
                    p += c.Value;
            }
            Debug.WriteLine(p);
            return 1;
        }
        // Suported symbols +,-,*,/,^: Precedance in infix notation is encoded by the of
        // the modulo % operator. Enum value % 3 == 0 is highest precedence
        private class Sym(float value, bool isOperator)
        {
            public bool IsOperator { get; set; } = isOperator;
            public float Value { get; set; } = value;
        }
        private enum Symbols
        {
            Addition = 1,
            Multiplication = 2,
            Exponentiation = 3,
            Subtraction = 4,
            Division = 5,
            Number = 6,
            LBracket = 7,
            RBracket = 8
        }
        private static int OperationValue(char ch)
        {
            switch (ch) {
                case '+': 
                    return (int)Symbols.Addition;
                case '*':
                    return (int)Symbols.Multiplication;
                case '^':
                    return (int)Symbols.Exponentiation;
                case '-':
                    return (int)Symbols.Subtraction;
                case '/':
                    return (int)Symbols.Division;
                case '(':
                    return (int)Symbols.LBracket;
                case ')':
                    return (int)Symbols.RBracket;
                default:
                    if (Char.IsNumber(ch) || ch == '.') 
                        return (int)Symbols.Number;
                    else 
                        return 0;
            }
        }
        private static int OperationSymbol(int ch)
        {
            switch (ch)
            {
                case (int)Symbols.Addition:
                    return '+';
                case (int)Symbols.Multiplication:
                    return '*';
                case (int)Symbols.Exponentiation:
                    return '^';
                case (int)Symbols.Subtraction:
                    return '-';
                case (int)Symbols.Division:
                    return '/';
                default:
                    return 0;
            }
        }
        private static double CallOperation(float o1, float o2, int o)
        {
            switch (o)
            {
                case (int)Symbols.Addition:
                    return o1 + o2;
                case (int)Symbols.Multiplication:
                    return o1 * o2;
                case (int)Symbols.Exponentiation:
                    return Math.Pow((double)o2, (double)o1);
                case (int)Symbols.Subtraction:
                    return o2 - o1;
                case (int)Symbols.Division:
                    return o2 / o1;
                default:
                    return 0;
            }
        }
    }
}
