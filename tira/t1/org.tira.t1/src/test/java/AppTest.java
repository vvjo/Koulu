
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import t1.*;

public class AppTest {

    Stack s = new Stack();

    @BeforeEach
    public void alusta() {
        int a = s.getSize();
        for (int i = 0; i < a; i++) {
            s.pop();
        }

    }

    @Test
    public void testPalauttaaNull(){
        assertNull(s.pop());
        assertEquals(0, s.getSize(), "Pinon korkeus alussa ei 0");
    }

    @Test
    public void testLisaa() {

        int a = s.getSize();
        System.out.println("TestAdd size before: " + a);
        s.push("a");
        System.out.println("TestAdd size after: " + s.getSize());
        assertTrue(s.getSize() > a, "Lisäyksen jälkeen pinon koko ei kasvanut");

    }

    @Test
    public void testLisaaMonta() {

        int a = s.getSize();
        System.out.println("TestAdd size before: " + a);
        s.push("a");
        s.push("b");
        s.push("c");
        System.out.println("TestAdd size after: " + s.getSize());
        assertTrue(s.getSize() == 3, "Lisäyksen jälkeen pinon koko ei kasvanut");

    }

    @Test
    public void testPoista() {

        s.push("a");
        int a = s.getSize();
        System.out.println("TestDelete size before: " + a);
        s.pop();
        System.out.println("TestDelete size after: " + a);
        assertTrue(s.getSize() < a, "Poiston jälkeen pino ei pienentynyt");

    }

    @Test
    public void testPoistaMonta() {

        s.push("a");
        s.push("b");
        s.push("c");
        s.push("d");
        int a = s.getSize();
        System.out.println("TestDelete size before: " + a);
        s.pop();
        s.pop();
        String data = s.pop().getData();
        System.out.println("TestDelete size after: " + a);
        assertTrue(s.getSize() == 1, "Poiston jälkeen pino ei pienentynyt");
        assertEquals("b", data, "Poistettavassa väärä data");

    }

    @Test
    public void testLisaaJaPoista() {

        s.push("a");
        s.push("b");
        s.push("c");
        s.pop();
        s.pop();
        s.push("d");
        s.push("e");
        s.pop();

        assertEquals("d", s.pop().getData(), "Lisääjapoista");
    }
}
